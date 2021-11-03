# infobox-cda

- Uma infobox que converti do fivem para o mta.



https://user-images.githubusercontent.com/90437030/140010891-3f3b90ba-1cd4-4588-b632-d5cd6e92f45d.mp4


Como Usar?
```lua

-- Client-Side
addCommandHandler('notify',function()
	triggerEvent("Notify", getRootElement(), "sucesso","Você vai ser desconectado em <b>60 segundos</b>.", 8000)
	triggerEvent("Notify", getRootElement(),"negado","Você vai ser desconectado em <b>60 segundos</b>.", 8000)
	triggerEvent("Notify", getRootElement(),"aviso","Você vai ser desconectado em <b>60 segundos</b>.", 8000)
end)

-- Server-Side
addCommandHandler('notify',function()
	triggerClientEvent(getRootElement(), "Notify", getRootElement(), "sucesso","Você vai ser desconectado em <b>60 segundos</b>.", 8000)
	triggerClientEvent(getRootElement(), "Notify", getRootElement(),"negado","Você vai ser desconectado em <b>60 segundos</b>.", 8000)
	triggerClientEvent(getRootElement(), "Notify", getRootElement(),"aviso","Você vai ser desconectado em <b>60 segundos</b>.", 8000)
end)
```
Caso tenha alguma dúvida me chama no discord XD 
Meu Discord: daniells_#9581
