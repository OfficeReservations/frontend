import { Link } from "react-router-dom";
import '../css/Signup.css'
export default function LoginPage() {
    return (
        <div className="gradient ">
            <div className="form_container ">
                <form action=""  >
                    <h1 className="text-center mb-4 size fs-1">Войти</h1>
                    <div className="input_box mb-3">
                        {/* <label htmlFor="text">Табельный номер</label> */}
                        <input type="text" className="form-control" placeholder="Табельный номер" required />
                    </div>
                    <div className="input_box mb-3">
                        {/* <label htmlFor="password">Пароль</label> */}
                        <input type="password" className="form-control" placeholder="Пароль" required />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Войти</button>
                    </div>
                    <div className="link text-end mt-3">
                        <p>Нет аккаунта?  <Link to="signUp">Войти</Link> </p>
                    </div>
                </form>

            </div>
        </div>

    )
}