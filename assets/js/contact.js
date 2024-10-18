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

    if (!isEmptyForm("form")) {
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
        
        else if (productQuantity == "" || productQuantity <= 0)
            showErrorToast("Vui lòng nhập đúng số lượng sản phẩm bạn muốn mua.");

        else {
            showSuccessToast("Đặt hàng thành công!", "Cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của chúng tôi!");
            return true;
        }
    } else 
        showWarningToast("Vui lòng nhập thông tin bạn nhé!");
    return false;
}   