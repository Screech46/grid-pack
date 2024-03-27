"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[682],{38829:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates a new ItemManager object. Do not create a raw ItemManager object and instead create a Grid or a SingleSlot object.","params":[{"name":"properties","desc":"","lua_type":"Types.ItemManagerProperties"}],"returns":[{"desc":"","lua_type":"Types.ItemManagerObject\\r\\n"}],"function_type":"static","private":true,"source":{"line":77,"path":"src/ItemManager/init.lua"}},{"name":"GetOffset","desc":"Gets the AbsolutePosition property from the ItemManager\'s GUI element.","params":[{"name":"itemRotation","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Vector2\\r\\n"}],"function_type":"method","source":{"line":131,"path":"src/ItemManager/init.lua"}},{"name":"GetSizeScale","desc":"Gets the AbsoluteSize of one slot.","params":[],"returns":[{"desc":"","lua_type":"Vector2\\r\\n"}],"function_type":"method","source":{"line":140,"path":"src/ItemManager/init.lua"}},{"name":"GetAbsoluteSizeFromItemSize","desc":"Gets the AbsoluteSize of an Item with the ItemManager\'s size scale.","params":[{"name":"itemSize","desc":"","lua_type":"Vector2"},{"name":"itemRotation","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Vector2\\r\\n"}],"function_type":"method","source":{"line":149,"path":"src/ItemManager/init.lua"}},{"name":"GetItemManagerPositionFromAbsolutePosition","desc":"Converts an AbsolutePosition to a ItemManager position.","params":[{"name":"absolutePosition","desc":"","lua_type":"Vector2"},{"name":"itemSize","desc":"","lua_type":"Vector2"},{"name":"itemRotation","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Vector2\\r\\n"}],"function_type":"method","source":{"line":158,"path":"src/ItemManager/init.lua"}},{"name":"IsColliding","desc":"Checks if an Item is colliding. Use the `at` parameter to override the collision check position, else it will use the Item\'s position.","params":[{"name":"item","desc":"","lua_type":"Types.ItemObject"},{"name":"ignoredItems","desc":"","lua_type":"{ Types.ItemObject }"},{"name":"at","desc":"","lua_type":"Vector2?"}],"returns":[{"desc":"","lua_type":"boolean\\r\\n"}],"function_type":"method","source":{"line":167,"path":"src/ItemManager/init.lua"}},{"name":"RemoveItem","desc":"Removes an item from the ItemManager.","params":[{"name":"item","desc":"","lua_type":"Types.ItemObject"}],"returns":[],"function_type":"method","source":{"line":176,"path":"src/ItemManager/init.lua"}},{"name":"SetVisibility","desc":"Sets the visibility property on all GUI elements and disables interactivity on all Items in the ItemManager.","params":[{"name":"isVisible","desc":"","lua_type":"boolean"}],"returns":[],"function_type":"method","source":{"line":183,"path":"src/ItemManager/init.lua"}},{"name":"ConnectTransferLink","desc":"Connect a TranferLink. Allows tranferring Items between all of the ItemManagers that the TransferLink is connected to.","params":[{"name":"transferLink","desc":"","lua_type":"Types.TransferLinkObject"}],"returns":[],"function_type":"method","source":{"line":200,"path":"src/ItemManager/init.lua"}},{"name":"DisconnectTransferLink","desc":"Disconnect a TransferLink.","params":[{"name":"transferLink","desc":"","lua_type":"Types.TransferLinkObject"}],"returns":[],"function_type":"method","source":{"line":212,"path":"src/ItemManager/init.lua"}},{"name":"CreateHighlight","desc":"Creates a new Highlight, used for highlighting where an Item will be dropped. Highlights are not only limited to Item dropping and can be used to highlight anything!\\nUse `ItemManager:AddHighlight()` to add an already existing highlight.","params":[{"name":"priority","desc":"","lua_type":"number"},{"name":"position","desc":"","lua_type":"Vector2"},{"name":"size","desc":"","lua_type":"Vector2"},{"name":"color","desc":"","lua_type":"Color3"}],"returns":[{"desc":"","lua_type":"Types.HighlightObject\\r\\n"}],"function_type":"method","source":{"line":229,"path":"src/ItemManager/init.lua"}},{"name":"AddHighlight","desc":"Adds an already existing highlight, use `ItemManager:CreateHighlight()` to create a new Highlight.","params":[{"name":"priority","desc":"","lua_type":"number"},{"name":"highlight","desc":"","lua_type":"Types.HighlightObject"}],"returns":[],"function_type":"method","source":{"line":259,"path":"src/ItemManager/init.lua"}},{"name":"RemoveHighlight","desc":"Removes a Highlight from the ItemManager.","params":[{"name":"highlight","desc":"","lua_type":"Types.HighlightObject"}],"returns":[],"function_type":"method","source":{"line":281,"path":"src/ItemManager/init.lua"}},{"name":"Destroy","desc":"Destroys the ItemManager.","params":[],"returns":[],"function_type":"method","source":{"line":295,"path":"src/ItemManager/init.lua"}}],"properties":[{"name":"Visible","desc":"If the ItemManager is visible or not, disables all interactions with Items. Should not be edited, use `ItemManager:SetVisibility()` to change it.","lua_type":"boolean","readonly":true,"source":{"line":26,"path":"src/ItemManager/init.lua"}},{"name":"VisibilityChanged","desc":"An event signal that fires every time the ItemManager\'s visibility changes.","lua_type":"RBXScriptSignal","tags":["Signal"],"readonly":true,"source":{"line":34,"path":"src/ItemManager/init.lua"}},{"name":"Highlights","desc":"All of the Highlights that are currently on the ItemManager. Use `ItemManager:CreateHighlight()`, `ItemManager:AddHighlight()` or `ItemManager:RemoveHighlight()` to edit.","lua_type":"{ HighlightObject }","readonly":true,"source":{"line":41,"path":"src/ItemManager/init.lua"}},{"name":"ConnectedTransferLinks","desc":"All of the TransferLinks that are currently connected to the ItemManager.","lua_type":"{ TransferLinkObject }","readonly":true,"source":{"line":48,"path":"src/ItemManager/init.lua"}},{"name":"TransferLinkConnected","desc":"An event signal that fires every time a new TransferLink is connected to the ItemManager.","lua_type":"RBXScriptSignal","tags":["Signal"],"readonly":true,"source":{"line":56,"path":"src/ItemManager/init.lua"}},{"name":"TransferLinkDisconnected","desc":"An event signal that fires every time a new TransferLink is disconnected from the ItemManager.","lua_type":"RBXScriptSignal","tags":["Signal"],"readonly":true,"source":{"line":64,"path":"src/ItemManager/init.lua"}},{"name":"Metadata","desc":"Any custom data that you would want to store.","lua_type":"{ any }","source":{"line":70,"path":"src/ItemManager/init.lua"}}],"types":[],"name":"ItemManager","desc":"The base class for all ItemManagers.","source":{"line":19,"path":"src/ItemManager/init.lua"}}')}}]);