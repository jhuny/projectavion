from django.shortcuts import render_to_response,RequestContext,render

from proyecto2.models import *

from .forms import *
 

def avionView(request):
  if request.method == "POST":
    formulario = avionForm(request.POST)
    if formulario.is_valid():
      formulario.save()   
      formulario =avionForm()
  else:                
    formulario =avionForm()
  ctx = {'form':formulario,'nbar': 'ubicacion',"retorno":"/avion/","titulo":"Ubicacion en el Mapa"}
  return render_to_response('general.html',ctx,context_instance=RequestContext(request))

