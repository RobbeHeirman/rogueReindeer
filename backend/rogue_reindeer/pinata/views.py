import json
import os
import random
import shutil

from django.db import IntegrityError
from django.http import JsonResponse, HttpResponseBadRequest
import requests

from pinata.models import MetaFile


def get_random_metadata_file(request):
    source_dir = './pinata/metadata'
    target_dir = './pinata/used_metadata'

    while True:
        file_list = os.listdir(source_dir)
        if not file_list:
            return HttpResponseBadRequest('Out of files to mint')
        random_file = random.choice(file_list)
        nw_file = os.path.join(target_dir, random_file)
        try:
            db_obj = MetaFile.objects.create(
                name=random_file,
                batch='T1'
            )
            shutil.move(os.path.join(source_dir, random_file), nw_file)
            with open(nw_file, 'r') as f:
                metadata = json.load(f)
                headers = {
                    'pinata_api_key': "6f0ba986bf81c12a4ec9",
                    'pinata_secret_api_key': "d3f5ea4a0c28297d0ef0b4622d78fdf7ca978761be431308b26fd784164de335",
                }
                body = {
                    'pinataMetadata': {
                        'name': f'{db_obj.batch} - {db_obj.name}',
                        'keyvalues': {
                            'batch': db_obj.batch,
                            'name': db_obj.name
                        }
                    },
                    'pinataContent': metadata
                }

                rsp = requests.post(
                    'https://api.pinata.cloud/pinning/pinJSONToIPFS',
                    headers=headers,
                    json=body
                )
                if rsp.status_code == 200:
                    db_obj.cid = rsp.json()['IpfsHash']
                    db_obj.save()
                    return JsonResponse({
                        'ipfs': f'ipfs://{db_obj.cid}'
                    })
                return HttpResponseBadRequest(rsp.json())

        except IntegrityError:
            try:
                shutil.move(os.path.join(source_dir, random_file), nw_file)
            except: # Probably already moved but dont let it crash on this
                pass
            print('retrying to select a random file')

