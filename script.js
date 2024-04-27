window.onload = function() {
    let canvas = document.getElementById('squidwardCanvas');
    let ctx = canvas.getContext('2d');

    // Drawing a simple Squidward
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2, true); // head
    ctx.moveTo(85, 80);
    ctx.arc(80, 80, 5, 0, Math.PI * 2, true);  // left eye
    ctx.moveTo(125, 80);
    ctx.arc(120, 80, 5, 0, Math.PI * 2, true);  // right eye
    ctx.stroke();
};

function answer(choice) {
    let responseText = "";
    switch(choice) {
        case 'yes':
            responseText = "Squidward is flattered and will go on a date with you.";
            break;
        case 'no':
            responseText = "Squidward is sad, and you've lost a chance.";
            break;
        case 'idk':
            responseText = "Squidward appreciates your honesty but prefers someone decisive.";
            break;
    }

    document.getElementById('response').innerText = responseText;
}
