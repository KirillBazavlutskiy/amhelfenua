import {FC} from 'react';

import s from './ServicesBlock.module.scss';
const ServicesBlock: FC = () => {
    return (
        <div className={s.container}>
            <h1>
                Ми надаємо різні види послуг. Якщо у вас є бажання допомогти українцям
                і при цьому отримати з цього користь для себе, перейдіть у розділ послуг
            </h1>
            <div className={s.servicesBlock}>
                <div className={s.service}>
                    <div className={s.head}>
                        <h1>Допомога з переїздом</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                    </div>
                    <p>
                        Виберіть професійний переїзд компанії або офісний переїзд із професійною транспортною компанією.
                        Тут ви точно зможете розслабитись у день переїзду, тому що помічники з переїзду оптимально навчені та доброзичливі.
                        Ви можете надіслати безкоштовний запит на підтримку, команда зробить вам пропозицію.
                        Скористайтеся перевагами команди, яка відмінно організує переїзд вашої компанії чи офісу, від першого огляду до переїзду.
                        Переїзд компанії потрібно організувати швидко? Ми підтримуємо вас у плануванні, переїзді компанії,
                        збиранні та розбиранні меблів та недорогому транспорті.
                    </p>
                </div>
                <div className={s.service}>
                    <div className={s.head}>
                        <h1>Складання та розбирання меблів</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </div>
                    <p>
                        Хочете спланувати переїзд і не можете попрощатися з декількома улюбленими
                        речами, які не вписуються в нову квартиру? Тут ви можете бути впевнені,
                        що ваш переїзд, включаючи тимчасове зберігання, пройде ідеально. Помічники
                        з вивезення добре навчені і подбають про ваші індивідуальні потреби,
                        будь то зберігання меблів або переїзд старшого.
                    </p>
                </div>
                <div className={s.service}>
                    <div className={s.head}>
                        <h1>Клінінг</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                    </div>
                    <p>
                        Протягом багатьох років наша команда досвідчених і навчених фахівців
                        з клінінгу займається прибиранням квартир і передачею в управління.
                        Ми точно знаємо, які пункти є в протоколі приймання-передачі управління
                        нерухомістю, і ретельно прибираємо квартиру. Ми забезпечуємо плавний
                        процес у цей, як правило, напружений день. Зосередьтеся на своєму новому
                        будинку під час переїзду, ми організуємо плавне прибирання з вивезенням.
                    </p>
                </div>
            </div>
            <button>Послуги</button>
        </div>
    );
};

export default ServicesBlock;