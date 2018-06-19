local url = "https://developers.weixin.qq.com/minigame/dev/document/render/canvas/wx.createCanvas.html"
local cmd = "curl "..url .. [[
   | grep "chapter\ \ \"\ data-level" |  grep -Eo "\/[a-zA-Z0-9\.]{1,}\.html" | sed 's/\/\(.*\)\.html/\1/g' | sed '1 i\wx' | sort | uniq > tempfile
]]
os.execute(cmd)
local file = io.open("tempfile","r")
local sFind = string.find
local sLen = string.len
local sSub = string.sub
local tInsert = table.insert
local result = { }
local curClass,classTable,checkClassName,beginLen
local function newClass(className)
    if (sLen(className) == 0) then return end
    curClass = className
    classTable = {className = className, property ={ } }
    checkClassName = curClass.."%."
    beginLen = sLen(checkClassName) - 1
    tInsert(result,classTable)
end
checkClassName = "thisclassnameissolongwxwillnotcreatethesame"
local line = file:read()
while (line) do
    if (sFind(line,checkClassName)) then
        tInsert(classTable.property,sSub(line, beginLen + 1, sLen(line)))
    else
        newClass(line)
    end
    line = file:read()
end
file:close()
file = io.open("wechatGame.d.ts","w")
for k ,v in ipairs(result) do
    file:write("declare module "..v.className .. " {\n")
    for _k,_v in ipairs(v.property) do
        file:write("    export function ".. _v .."(...args);\n")
    end
    file:write("}\n")
end
file:close()