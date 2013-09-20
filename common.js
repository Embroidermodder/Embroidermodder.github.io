//TODO: update main website pages to use these functions

function createMenu()
{
    //TODO: generate menu for doc pages

    if(!docCompiled())
    {
        document.writeln('        <!-- MENU START -->');
        document.writeln('        <div id="menu">');
        document.writeln('            <a href="index.html"><div id="menuUpNews"><span>News</span></div></a>');
        document.writeln('            <a href="features.html"><div id="menuDownFeatures"><span>Features</span></div></a>');
        document.writeln('            <a href="about.html"><div id="menuUpAbout"><span>About</span></div></a>');
        document.writeln('            <a href="donate.html"><div id="menuUpDonate"><span>Donate</span></div></a>');
        document.writeln('            <a href="downloads.html"><div id="menuUpDownloads"><span>Downloads</span></div></a>');
        document.writeln('            <a href="mailing-list.html"><div id="menuUpMailingList"><span>Mailing List</span></div></a>');
        document.writeln('            <a href="contact.html"><div id="menuUpContact"><span>Contact</span></div></a>');
        document.writeln('            <div class="cornerTopLeft"></div>');
        document.writeln('            <div class="cornerTopRight"></div>');
        document.writeln('            <div class="cornerBottomLeft"></div>');
        document.writeln('            <div class="cornerBottomRight"></div>');
        document.writeln('            <div class="edgeTop"></div>');
        document.writeln('            <div class="edgeBottom"></div>');
        document.writeln('            <div class="edgeLeft"></div>');
        document.writeln('            <div class="edgeRight"></div>');
        document.writeln('        </div>');
        document.writeln('        <!-- MENU END -->');
    }
}

function borderSingle()
{
    document.writeln('        <div class="cornerTopLeft"></div>');
    document.writeln('        <div class="cornerTopRight"></div>');
    document.writeln('        <div class="cornerBottomLeft"></div>');
    document.writeln('        <div class="cornerBottomRight"></div>');
    document.writeln('        <div class="edgeTop"></div>');
    document.writeln('        <div class="edgeBottom"></div>');
    document.writeln('        <div class="edgeLeft"></div>');
    document.writeln('        <div class="edgeRight"></div>');
}

function borderDouble()
{
    document.writeln('            <div class="doubleCornerTopLeft"></div>');
    document.writeln('            <div class="doubleCornerTopRight"></div>');
    document.writeln('            <div class="doubleCornerBottomLeft"></div>');
    document.writeln('            <div class="doubleCornerBottomRight"></div>');
    document.writeln('            <div class="doubleEdgeTop"></div>');
    document.writeln('            <div class="doubleEdgeBottom"></div>');
    document.writeln('            <div class="doubleEdgeLeft"></div>');
    document.writeln('            <div class="doubleEdgeRight"></div>');
}

function docStart()
{
    if(docCompiled())
        document.writeln('        <div class="documentation">');
}

function docEnd()
{
    if(docCompiled())
        document.writeln('        </div>');
}

function docCompiled()
{
    if(location.hostname == "embroidermodder2")
        return true;
    return false;
}

function anchorLinksAlphabetical()
{
    document.writeln('                    <a href="#anchor-top">Top of Page</a> |');
    document.writeln('                    <a href="#anchor-number">#</a> |');
    document.writeln('                    <a href="#anchor-a">A</a> |');
    document.writeln('                    <a href="#anchor-b">B</a> |');
    document.writeln('                    <a href="#anchor-c">C</a> |');
    document.writeln('                    <a href="#anchor-d">D</a> |');
    document.writeln('                    <a href="#anchor-e">E</a> |');
    document.writeln('                    <a href="#anchor-f">F</a> |');
    document.writeln('                    <a href="#anchor-g">G</a> |');
    document.writeln('                    <a href="#anchor-h">H</a> |');
    document.writeln('                    <a href="#anchor-i">I</a> |');
    document.writeln('                    <a href="#anchor-j">J</a> |');
    document.writeln('                    <a href="#anchor-k">K</a> |');
    document.writeln('                    <a href="#anchor-l">L</a> |');
    document.writeln('                    <a href="#anchor-m">M</a> |');
    document.writeln('                    <a href="#anchor-n">N</a> |');
    document.writeln('                    <a href="#anchor-o">O</a> |');
    document.writeln('                    <a href="#anchor-p">P</a> |');
    document.writeln('                    <a href="#anchor-q">Q</a> |');
    document.writeln('                    <a href="#anchor-r">R</a> |');
    document.writeln('                    <a href="#anchor-s">S</a> |');
    document.writeln('                    <a href="#anchor-t">T</a> |');
    document.writeln('                    <a href="#anchor-u">U</a> |');
    document.writeln('                    <a href="#anchor-v">V</a> |');
    document.writeln('                    <a href="#anchor-w">W</a> |');
    document.writeln('                    <a href="#anchor-x">X</a> |');
    document.writeln('                    <a href="#anchor-y">Y</a> |');
    document.writeln('                    <a href="#anchor-z">Z</a>');
}

function anchorLinksMenus()
{
    document.writeln('                    <a href="#anchor-top">Top of Page</a> |');
    document.writeln('                    <a href="#anchor-file">File</a> |');
    document.writeln('                    <a href="#anchor-edit">Edit</a> |');
    document.writeln('                    <a href="#anchor-view">View</a> |');
    document.writeln('                    <a href="#anchor-tools">Tools</a> |');
    document.writeln('                    <a href="#anchor-dimension">Dimension</a> |');
    document.writeln('                    <a href="#anchor-settings">Settings</a> |');
    document.writeln('                    <a href="#anchor-window">Window</a> |');
    document.writeln('                    <a href="#anchor-help">Help</a>');
}

function anchorLinkTop()
{
    document.writeln('                    <a href="#anchor-top">Top of Page</a>');
}
