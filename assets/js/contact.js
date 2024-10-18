 // Toast function
 function toast({
    title = "",
    message = "",
    type = "info",
    duration = 1000,
    delay = 3000,
}) {
    const main = document.getElementById("message");

    if (main) {
        const toast = document.createElement("div");

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + delay);

        // Remove toast when click
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                // clearTimeout - không thực hiện function autoRemoveId
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fa-sharp fa-solid fa-circle-info',
            warning: 'fa-sharp fa-solid fa-circle-exclamation',
            error: 'fa-sharp fa-solid fa-circle-xmark'
        };

        const icon = icons[type];
        const timeDelay = (delay / 1000).toFixed(2);
        const timeDuration = (duration / 1000).toFixed(2);
        toast.classList.add("toast", `toast--${type}`);

        /* forwards - stop at the end. */
        toast.style.animation = `slideInLeft ease .5s, fadeOut linear ${timeDuration}s ${timeDelay}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <div class="toast__title">${title}</div>
                <div class="toast__mgs">${message}</div>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;

        main.appendChild(toast);
    }
}

function showSuccessToast(title, infoMessage) {
    toast({
        title: title,
        message: infoMessage,
        type: "success",
        duration: 1000,
        delay: 3000,
    });
}

function showWarningToast(infoWarning) {
    toast ({
    title: 'Chú ý',
    message: infoWarning,
    type: 'warning',
    duration: 1000,
    delay: 3000
})
}

function showErrorToast(infoError) {
    toast({
        title: 'Lỗi',
        message: infoError,
        type: 'error',
        duration: 1000,
        delay: 3000
    })
}

function isEmptyForm() {
    var form = document.getElementById("form");
    var elements = form.elements;
    var isEmpty = true;

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type !== "button" && elements[i].value.trim() !== "") {
            isEmpty = false;
            break;
        }
    }
    return isEmpty;
}

function checkInfoRegist() {
    var userNameElement = document.getElementById("user_name");
    var userName = userNameElement.value;
    // console.log(userName);

    var userPhoneElement = document.getElementById("user_phone");
    var userPhone = userPhoneElement.value; 

    var userEmailElement = document.getElementById("user_email");
    var userEmail = userEmailElement.value;
    // console.log(userEmail);

    var userAddressElement = document.getElementById("user_address");
    var userAddress = userAddressElement.value;
    // console.log(userAddress);

    var userSelectElement = document.getElementById("user_select");
    var userSelect = userSelectElement.value;

    var productQuantityElement = document.getElementById("product_quatity");
    var productQuantity = productQuantityElement.value;

    var phonePattern = /^[0-9]{10}$/;

    if (!isEmptyForm()) {
        if (userName == "")
            showErrorToast("Vui lòng nhập tên của bạn!");

        else if (userPhone == "") 
            showErrorToast("Vui lòng nhập số điện thoại của bạn!");

        else if (!phonePattern.test(userPhone))
            showErrorToast("Vui lòng nhập đúng định dạng số điện thoại.");

        else if (userEmail == "")
            showErrorToast("Vui lòng nhập email của bạn!");

        else if (!userEmailElement.validity.valid)
            showErrorToast("Vui lòng nhập đúng định dạng email.");

        else if (userAddress == "")
            showErrorToast("Vui lòng nhập địa chỉ của bạn.");

        else if (userSelect == "")
            showErrorToast("Vui lòng chọn loại sản phẩm.");
        
        else if (productQuantity < 0)
            showErrorToast("Vui lòng nhập đúng số lượng sản phẩm bạn muốn mua.");

        else {
            showSuccessToast("Đặt hàng thành công!", "Cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của chúng tôi!");
            return true;
        }
    } else 
        showWarningToast("Vui lòng nhập thông tin bạn nhé!");
    return false;
}   