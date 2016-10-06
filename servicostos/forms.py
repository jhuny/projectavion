import zipfile
from io import BytesIO
from django.conf import settings
from django.http import HttpResponse
from django.template import loader
from django.forms import ModelForm
from django import forms
from .models import avion

class avionForm(ModelForm):
	class Meta:
		model = avion
		fields = ['id_avion', 'matricula_avion', 'tipo_avion', 'capacidad_avion', 'modelo_avion']
		