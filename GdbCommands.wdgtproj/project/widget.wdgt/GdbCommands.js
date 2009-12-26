// This file was generated by Dashcode from Apple Inc.
// You may edit this file to customize your Dashboard widget.

//
// Function: load()
// Called by HTML body element's onload event when the widget is ready to start
//
function load()
{
    setupParts();
}

//
// Function: remove()
// Called when the widget has been removed from the Dashboard
//
function remove()
{
    // Stop any timers to prevent CPU usage
    // Remove any preferences as needed
    // widget.setPreferenceForKey(null, createInstancePreferenceKey("your-key"));
}

//
// Function: hide()
// Called when the widget has been hidden
//
function hide()
{
    // Stop any timers to prevent CPU usage
}

//
// Function: show()
// Called when the widget has been shown
//
function show()
{
    displayContent();
}

//
// Function: sync()
// Called when the widget has been synchronized with .Mac
//
function sync()
{
    // Retrieve any preference values that you need to be synchronized here
    // Use this for an instance key's value:
    // instancePreferenceValue = widget.preferenceForKey(null, createInstancePreferenceKey("your-key"));
    //
    // Or this for global key's value:
    // globalPreferenceValue = widget.preferenceForKey(null, "your-key");
}

//
// Function: showBack(event)
// Called when the info button is clicked to show the back of the widget
//
// event: onClick event from the info button
//
function showBack(event)
{
    var front = document.getElementById("front");
    var back = document.getElementById("back");

    if (window.widget) {
        widget.prepareForTransition("ToBack");
    }

    front.style.display = "none";
    back.style.display = "block";
    populateCoda();
    if (window.widget) {
        setTimeout('widget.performTransition();', 0);
    }
}

//
// Function: showFront(event)
// Called when the done button is clicked from the back of the widget
//
// event: onClick event from the done button
//
function showFront(event)
{
    var front = document.getElementById("front");
    var back = document.getElementById("back");

    if (window.widget) {
        widget.prepareForTransition("ToFront");
    }

    front.style.display="block";
    back.style.display="none";

    if (window.widget) {
        setTimeout('widget.performTransition();', 0);
    }
}

if (window.widget) {
    widget.onremove = remove;
    widget.onhide = hide;
    widget.onshow = show;
    widget.onsync = sync;
}

function readUrl(filename)
{
    var req = new XMLHttpRequest();

    url = "Content/" + filename;
    req.open("GET", url ,false);
    req.send(null);

    //req.responseText returns a string
    response = req.responseText;
    return response;
}

function populateCoda() {
    var coda_element = document.getElementById("codatext");
    var coda_content = readUrl("coda.html");
    coda_element.innerHTML = coda_content;
}

function displayAllSections() {
    var displayHTML = "";
    displayHTML = displayHTML + readUrl("starting.html");
    displayHTML = displayHTML + readUrl("stopping.html");
    displayHTML = displayHTML + readUrl("getting_help.html");
    displayHTML = displayHTML + readUrl("execution_context.html");
    displayHTML = displayHTML + readUrl("execution_control.html");        
    displayHTML = displayHTML + readUrl("breakpoints_and_watchpoints.html");
    displayHTML = displayHTML + readUrl("program_stack.html");
    displayHTML = displayHTML + readUrl("shell.html");
    displayHTML = displayHTML + readUrl("display_inspect.html");
    displayHTML = displayHTML + readUrl("automatic_display.html");
    displayHTML = displayHTML + readUrl("expressions.html");
    displayHTML = displayHTML + readUrl("symbol_table.html");
    displayHTML = displayHTML + readUrl("signal_handling.html");
    displayHTML = displayHTML + readUrl("debugging_targets.html");
    displayHTML = displayHTML + readUrl("controlling_gdb.html");
    displayHTML = displayHTML + readUrl("working_files.html");
    displayHTML = displayHTML + readUrl("source_files.html");
    displayHTML = displayHTML + readUrl("emacs.html");
    document.getElementById('maincontent').innerHTML = displayHTML;
    document.getElementById("scrollArea").object.refresh();
    document.getElementById("scrollArea").object.verticalScrollTo(0,0);
}

function displayContent(event)
{
    // Insert Code
    var menu = document.getElementById("sectionMenu");
    selectedItem = menu.object.getValue();
    var contentFile = "";
    if (selectedItem == "All") {
        displayAllSections();
    } else {
        contentFile = selectedItem
        displayHTML = readUrl(contentFile);
        document.getElementById('maincontent').innerHTML = displayHTML;
        document.getElementById("scrollArea").object.refresh();
        document.getElementById("scrollArea").object.verticalScrollTo(0,0);
    }
}

