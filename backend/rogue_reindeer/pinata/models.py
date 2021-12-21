from django.db import models


# Create your models here.
class MetaFile(models.Model):

    class Meta:
        unique_together = [['batch', 'name']]
        indexes = [
            models.Index(fields=['batch', 'name'], name='batch_name')
        ]

    def __str__(self):
        return f'name: {self.name}\nbatch: {self.batch}\nCID: {self.cid} nft:{self.nft}'

    name = models.TextField()
    batch = models.TextField(default='')
    cid = models.TextField(null=True)
    nft = models.TextField(null=True)
