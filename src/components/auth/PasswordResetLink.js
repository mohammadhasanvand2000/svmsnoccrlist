import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SomeComponent() {
  const uidb64 = "NQ";
  const token = "bzk2ox-d94d96acdc8ca4b9754ec4b4de15e12a";
  const navigate = useNavigate();

  return (
    <div className="my-component">
      {/* ایجاد لینک به صورت مستقیم */}
      <Link to={`/Setnewpassword/${uidb64}/${token}`}>
        Go to Setnewpassword
      </Link>

      {/* یا می‌توانید از یک دکمه یا عنصر دیگر نیز استفاده کنید */}
      <button onClick={() => navigate(`/Setnewpassword/${uidb64}/${token}`)}>
        Go to Setnewpassword
      </button>
    </div>
  );
}

export default SomeComponent;
