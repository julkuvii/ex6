
function showLanguage(){
    var select = document.getElementById('language');
    var input = document.getElementById('selected_language')
    select.onchange = function() {
        input.value = select.value;
    }
}

function showPhone(){
    var select = document.getElementById('phone');
    var input = document.getElementById('selected_phone')
    select.onchange = function() {
        input.value = select.value;
    }
}