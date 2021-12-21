from django.urls import path

from pinata import views

urlpatterns = [
    path('get-random-metafile', views.get_random_metadata_file, name='get-random-metafile')

]