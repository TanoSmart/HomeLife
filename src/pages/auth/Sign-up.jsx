import '../../css/App.css'
import { useState } from "react";

const SignUp = () => {

    const [nome, setNome] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const validateTelefone = (phone) =>
        /^(92|93|94|95|96|97|98)\d{7}$/.test(phone);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            alert("Email inválido");
            return;
        }

        if (!validateTelefone(phone)) {
            alert("Número inválido");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nome,
                    email,
                    phone,
                    senha
                }),
            });

            const data = await res.json();

            if (data.success) {
                alert("Conta criada com sucesso!");
                window.location.href = "/login";
            }

        } catch (error) {
            console.error(error);
            alert("Erro ao criar conta");
        }
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="main">

            <div className="w-full h-full bg-blue-600 absolute z-10 opacity-10"></div>

            <div className="flex justify-center w-full h-full items-center bg-blue-600 absolute z-20">

                <div className="bg-slate-900 p-20 max-w-md w-full rounded-2xl text-white ">

                    <h1 style={{color: 'white', padding: 30}} className="text-3xl text-center font-bold text-white">
                        Criar Conta
                    </h1>

                    <form
                        className="flex flex-col justify-center items-center gap-6 p-4 w-full"
                        onSubmit={handleSubmit}
                    >

                        <div className="campo flex flex-col">
                            <label htmlFor="nome">Nome Completo</label>
                            <input
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                className="w-80 h-10 p-3 rounded-xl border"
                                required
                            />
                        </div>

                        <div className="campo flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-80 h-10 p-3 rounded-xl border"
                                required
                            />
                        </div>

                        <div className="campo flex flex-col">
                            <label htmlFor="phone">Telefone</label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="912345678"
                                className="w-80 h-10 p-3 rounded-xl border"
                                required
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="senha">Senha</label>

                            <div className="flex flex-row w-80 h-10">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    className="w-full h-full p-3 px-0 rounded-xl border"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={togglePassword}
                                    className="px-3 w-10 h-10"
                                >
                                    👁
                                </button>
                            </div>

                        </div>
                        <div className="text-center w-80 h-10">
                            <button
                                type="submit"
                                className="bg-blue-600 text-center px-6 py-2 w-80 h-10 rounded-full hover:bg-blue-700 text-white"
                            >
                                Criar Conta
                            </button>
                        </div>
                    </form>

                    <div className="text-center mt-4 pt-3">
                        <a href="/login">
                            Já tenho conta
                        </a>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default SignUp;