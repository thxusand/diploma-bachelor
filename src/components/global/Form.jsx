import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import styles from '../../styles/Form.module.css';
import button from '../../styles/Button.module.css';

import Icon from './Icon';

const Form = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm('service_tx40qnj', 'template_902rqf5', form.current, {
        publicKey: 'AzuvWqut4IUJmOehj',
      })
      .then(
        () => {
          alert("Дякую за звернення, ми зв'яжемось з вами якомога скоріше!");
          reset();
        },
        (error) => {
          console.log(error.text);
          alert('На жаль, щось пішло не так. Спробуйте ще раз.');
        },
      );
  };

  return (
    <form ref={form} onSubmit={handleSubmit(sendEmail)}>
      <input
        placeholder="Ім’я:"
        name="name"
        {...register('name', {
          required: "* Це поле обов'язкове до заповнення!",
          pattern: /^[А-Яа-я]+$/i,
        })}
        type="text"
        className={styles.name}
      />
      <div className={styles.errorMessageWrapper}>
        {errors?.name && (
          <p className={styles.errorMessage}>{errors?.name.message}</p>
        )}
      </div>
      <input
        placeholder="Телефон:"
        name="phone"
        {...register('phone', {
          required: "* Це поле обов'язкове до заповнення!",
          minLength: {
            value: 9,
            message:
              "** Будь ласка, введіть ваш справжній номер телефону, щоб ми змогли з вами зв'язатись",
          },
        })}
        type="tel"
        className={styles.phone}
      />
      <div className={styles.errorMessageWrapper}>
        {errors?.phone && (
          <p className={styles.errorMessage}>{errors?.phone.message}</p>
        )}
      </div>
      <textarea
        name="message"
        placeholder="Додаткова інформація..."
        {...register('message')}
        rows="5"
        className={styles.comment}
      />
      <div className={styles.mg} />
      <button disabled={!isValid} className={button.button}>
        <div className={styles.planeWrapper}>
          <Icon spriteId="plane" className={styles.plane} />
        </div>
      </button>
    </form>
  );
};

export default Form;
