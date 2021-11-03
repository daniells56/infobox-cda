--[[
    Exemplo de como usar:
]]

addCommandHandler('notify',function()
	triggerClientEvent(getRootElement(), "Notify", getRootElement(), "sucesso","Você vai ser desconectado em <b>60 segundos</b>.", 8000)
	triggerClientEvent(getRootElement(), "Notify", getRootElement(),"negado","Você vai ser desconectado em <b>60 segundos</b>.", 8000)
	triggerClientEvent(getRootElement(), "Notify", getRootElement(),"aviso","Você vai ser desconectado em <b>60 segundos</b>.", 8000)
end)