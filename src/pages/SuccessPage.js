import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const status = params.get("status");

        if (status === "PAID") {
            alert("Thanh toán thành công!");
        } else {
            navigate("/"); // Quay về trang chính nếu lỗi
        }
    }, [navigate]);

    return <h1>✅ Thanh toán thành công!</h1>;
};

export default SuccessPage;
