# Other ItemManager Types

## Single Slots
With SingleSlots you are able to drag any item into it, disreguarding the size and position of the item. This can for example, be used as an equip slot where you have your primary weapon, tool or armor stored.

The SingleSlot setup is a little different than the Grid setup.
Here is an example:

```lua
local GridPack = require(game:GetService("ReplicatedStorage").Packages.GridPack)

local screenGui = Instance.new("ScreenGui")
screenGui.Name = "GridPack"
screenGui.ResetOnSpawn = false
screenGui.Parent = game:GetService("Players").LocalPlayer.PlayerGui

local singleSlot = GridPack.createSingleSlot({
    Parent = screenGui, -- Parent of the slot container

    Visible = true -- If the slot is visible, changes the containers visible property. Also disables item interaction on the item inside.

    Assets = {
        Slot = nil -- Add your own CanvasGroup here to customize the slot.
    }

    AnchorPoint = Vector2.new(0, 0.5), -- Anchor point of the slot container
    Position = UDim2.new(0, 20, 0.5, 0), -- Position of the slot container
    Size = UDim2.fromScale(0.25, 0.5), -- Size of the slot container
	
    Metadata = {
        -- Here you are free to store any values you want.
    }
})
```