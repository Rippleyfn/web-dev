let accountStack = [];

$(".required").on("input", function() {
    $(this).removeClass("input-error");
});

$("#Register").click(function(){
    let isValid = true;

    $(".required").each(function() {
        if ($(this).val().trim() === "") {
            $(this).addClass("input-error");
            isValid = false;
        } else {
            $(this).removeClass("input-error");
        }
    });

    if(!isValid){
        showToast("Please fill all required fields!");
    }
    else {
        const user = {
            fname: $("#FirstName").val().trim(),
            lname: $("#LastName").val().trim(),
            age: $("#Age").val().trim(),
            email: $("#Email").val().trim()
        };

        accountStack.push(user); 
        updateTable();
        $(".required").val(""); 
        showToast("Successfully Logged in!");
    }
});

function showToast(text){
    $("#toast").text(text).fadeIn();
    setTimeout(()=> $("#toast").fadeOut(), 2000);
}

function updateTable() {
    const tbody = $("#Lamesa tbody");
    tbody.empty();
    accountStack.forEach(user => {
        const newRow = `<tr>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.age}</td>
            <td>${user.email}</td>
        </tr>`;
        tbody.append(newRow);
    });
}