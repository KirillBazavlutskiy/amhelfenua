import { FC, useState } from 'react';
import s from './ContactsBlock.module.scss';

interface IForm {
    name: string;
    email: string;
    phone: string;
    theme: string;
    shortMessage: string;
}

const ContactsBlock: FC = () => {

    const [form, setForm] = useState<IForm>({
        name: "",
        email: "",
        phone: "",
        theme: "Хочу стати волонтером",
        shortMessage: ""
    })

    return (
        <div className={s.container}>
            <div className={s.contacts}>
                <h1>Контакти</h1>
                <a href="tel:+41794038210">Дзвоніть</a>
                <p>Пишіть на пошту або в будь-який месенджер</p>
                <div className={s.phoneNum}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span>+41794038210</span>
                </div>
            </div>
            <form className={s.form}>
                <div className={s.head}>
                    <label>
                        Ім'я
                        <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                    </label>
                    <label>
                        E-mail
                        <input
                            type="text"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                    </label>
                </div>
                <label>
                    Телефон
                    <input
                        type="text"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                </label>
                <label>
                    Оберіть тему
                    <select
                        value={form.theme}
                        onChange={(e) => setForm({ ...form, theme: e.target.value })}
                    >
                        <option value="Хочу стати волонтером">Хочу стати волонтером</option>
                        <option value="З питань співпраці">З питань співпраці</option>
                    </select>
                </label>
                <label>
                    Коротке повідомлення
                    <textarea
                        value={form.shortMessage}
                        onChange={(e) => setForm({ ...form, shortMessage: e.target.value })}
                    />
                </label>
                <button>Відправити</button>
            </form>
        </div>
    );
};

export default ContactsBlock;