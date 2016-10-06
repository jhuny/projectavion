from django.contrib import admin 
from proyecto1 import views
#from django.conf.urls import patterns, url, include
from rest_framework.routers import DefaultRouter
from proyecto1 import views
#from views import * 	
admin.autodiscover()
'''
router = DefaultRouter()
router.register(r'acreedor', acreedorViewSet)
router.register(r'division', divisionViewSet)
router.register(r'cecos', cecosViewSet)
router.register(r'tipodocumento', tipodocumentoViewSet)
router.register(r'usuario', usuarioViewSet)
router.register(r'estatus', estatusViewSet)
router.register(r'radicacion', radicacionViewSet)
'''
urlpatterns = patterns('',
   #  url(r'^', include(router.urls)),
     url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
     
     url(r'^avion/',"avion"),
     


)
