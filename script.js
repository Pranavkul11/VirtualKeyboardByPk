const rows = [
    ["Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Del"],
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Bspc"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    ["Caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
    ["Ctrl", "Alt", "Space", "Alt", "Ctrl"]
];

const keyboard = document.getElementById("keyboard");
const textInput = document.getElementById("textInput");
const removeAll=document.createElement("button");
removeAll.textContent="clear";
removeAll.onclick=()=>{
    textInput.value="";
}
keyboard.appendChild(removeAll);

rows.forEach(row => {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    
    row.forEach(key => {
        let btn = document.createElement("button");
        btn.textContent = key;
        
        if (key === "Space") btn.classList.add("space");

        btn.onclick = () => {
            if (key === "Backspace") {
                textInput.value = textInput.value.slice(0, -1);
            } else if (key === "Space") {
                textInput.value += " ";
            } else if (!["Shift", "Ctrl", "Alt", "Caps", "Tab", "Enter", "Esc", "Del"].includes(key)) {
                textInput.value += key;
            }
        };
        
        rowDiv.appendChild(btn);
    });

    keyboard.appendChild(rowDiv);
});
