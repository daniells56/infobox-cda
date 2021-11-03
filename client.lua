local x, y = guiGetScreenSize()
local link = "http://mta/"..getResourceName(getThisResource()).."/html/index.html"
local browser = createBrowser(x, y, true, true, false)



addEventHandler("onClientBrowserCreated", browser, function()
   loadBrowserURL(source, link)
   SendNUIMessage(browser, { action = "showAll" })
end)


function SendNUIMessage(browser, table)
   if isElement(browser) and type(table) == "table" then
      return executeBrowserJavascript(browser, 'window.postMessage('..toJSON(table)..'[0])')
   end
end

function dxNUI()

    dxDrawImage(0, 0, x, y, browser)

end
addEventHandler('onClientRender', getRootElement(), dxNUI) 


addEvent("Notify", true)
addEventHandler("Notify", getRootElement(), function(type, string)
    SendNUIMessage(browser, {
        NotifyString = string,
        NotifyType = type
    })
end)

--[[
    Exemplo de como usar:
]]

addCommandHandler('notify',function()
	triggerEvent("Notify", getRootElement(), "sucesso","Você vai ser desconectado em <b>60 segundos</b>.", 8000)
	triggerEvent("Notify", getRootElement(),"negado","Você vai ser desconectado em <b>60 segundos</b>.", 8000)
	triggerEvent("Notify", getRootElement(),"aviso","Você vai ser desconectado em <b>60 segundos</b>.", 8000)
end)