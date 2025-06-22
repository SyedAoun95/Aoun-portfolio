import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    // Construct mailto link with form data
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${form.user_name}\nEmail: ${form.user_email}\nMessage: ${form.message}`
    );
    // Redirect to email client
    window.location.href = `mailto:aouns6229@gmail.com?subject=${subject}&body=${body}`;
    setLoading(false);
    setForm({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-8'>
          <div className='flex flex-col gap-6'>
            <div className='flex items-center gap-2'>
              <span className='text-white'><img 
                    src="data:image/png;base64,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" 
                    alt="GitHub" 
                    className='w-10 h-10'
                  /></span>
              <span> aouns6229@gmail.com</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-white'> <img 
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSDxUTEhMWFRUXFRUVFRgVFRgVFRUXFRUXGBUVGBUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLi0BCgoKDg0OGxAQGy0mICUvLy0vLS01LS0tLS0tLS0tLS0vLS0tLS8tKy0tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABwECAwUGBP/EAEAQAAIBAgIGBwQJAwMFAQAAAAABAgMRBDEFBhIhQVEHEyJhcYGRMlKh8EJicoKisbLB0SOS4RQzUyVDk8LSFv/EABoBAQACAwEAAAAAAAAAAAAAAAABBgIEBQP/xAA2EQEAAQMDAgMHAgQGAwAAAAAAAQIDBAURMSFREhNBMmFxgaHR8CKRFVKxwRQjQoLh8SQzcv/aAAwDAQACEQMRAD8AnEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhxGLp01ec4xXOTS/Mypoqq4hjNURzLT4nXLBQzrxf2Lz/SmbdGn5NXFEterNsU81Q8MukLB8HN/cf7ntGkZXb6w8Z1PH7/SVF0hYPnNfcZM6RldvrB/FMfv9JevD67YGf/e2ftRlH4tHjXpuTTzRPy6vSnPx6v8AU3GE0jSqq9OpCf2ZJ/kaldquidqo2bNNymrrEvUYMwAAAAAAAAAAAAAAAAAAAAACjYHMac14w2HbjF9bNcIZJ98sl+Z0cbTL17rttHeWjkahatdOZ9zhdK684utujJUo8oZ+cnv9LHdsaRYt+1+qXHvaper9no5ytVlN7U5OT5ybk/VnSot00RtTER8GhVXVX7U7rLGbAAAZIq29mM9ekMo6crVNp7SdnzW5+omimY2mNyK5id4nZvdF65Yuhu6zrI+7U7X4s/ic+/pWPc4jafc3bWpXrfM7x73caE6QKFVqNZdTLm3eD+9w8ziZOkXrXWn9UOvY1O1c6VdJdfTmpJNNNPJremcqY25dGJ3XEJAAAAAAAAAAAAAAAAADX6Z0xSwtPbqytyX0pPklxPaxj3L1Xhoh5Xr9FqnxVyivWPXCvim4punS92L3yX1pcfDLxLTh6Xbs/qq61fRXcrUbl3pT0j6ubOo5wAQBgUAyQyv8/OZE9mUd1spXJiNkTO6gQAANxoHWWvhJdiW1DjTk7xfh7r8PiaGVp9rIjrG094buNnXLPvjslbVzWWjjIXg9ma9qD9pd/eu9FWysO5j1bVx07rFj5Vu/G9P7N0ajZAAAAAAAAAAAAAAANHrTrHTwdK77VSXsQ4t83yS5m5h4deTXtHHrLVysqmxTvPPpCHtKaSq4iq6lWW1J5corlFcEXDHx7dijw0R/yq9+/Xeq8VTyHu8QAgAAAAAAAAFAKgZcJiZ0pqdOTjKLumuHzyPO7aou0+GuN4Z27lVurxUz1S3qbrZHFx6upaNaK3rhNe9H+OBUc/T6sareOtM+qzYWbTfp2n2nUHOb4AAAAAAAAAAAAGt0/piGFoSqz38Ix4ylwSPfGx6r9yKKXjfvU2aJrqQnpTSFTEVZVarvKXolwiuSRdcfHosURRQqd+9Ver8VTynu8VAKgAAFzg0rkRO6dlpKAABQCoCwF042ZETumY2WkoZMPXlTnGcG4yi7xazTRhct03KZpq4lnRXVRVFVPMJm1R1hjjKN8qkbKpHv4SXc/nIpebiVY1zwzx6SteJlU36N459W+NNtAAAAAAAAAABSckk28lvYiNyZ2Qtrjp54vENp/wBKF401zXGfi/ysXLTcOMe1vPtTz9lWz8rzrm0cQ0J0WgAAAF1Om5SUYpyk9ySTbb5JLezGqummN6p2hlTTNU7RHVu8VqpiaOHdepTtFWurpzim7bTivLwvvyOfb1Oxcuxapnn19G5XgXrdvzKo+7RylfM6URs0plQIAAAAgMj7PiY8suGNmTEAAbLV/S0sLiI1Y5ZTXvQea8eK70jUzMWMi1NE8+nxbOLkTYuRV6eqcMJiY1acakHeMkpJ80yk10zRVNM8wttNUVREwzGLIAAAAAAAAAcf0k6Y6nDKlF2nVunzUF7XrdLzOrpON5t7xTxT1+zm6lkeVa8McyidluVkAAANjoHQ1TF1lTprvnJ+zCPN8+5cfVmpl5dGNR4qufSO7Zxsau/X4afnLsNVqKwGlJ4aok1US6qo0k3m0k+Ce9P60UcTNuTl4tN+n/TzH5+dXWxKIxsmbU+vEpBr0YzhKEknGScZJ5NNWafkcKmZid4diqImNpQXpzRksNiJ0Zb9l9l+9Fq8ZelvO5esTIi/Zpr/AH+Kn5NmbN2aHgNl4KtgAKpX+bDcVT2bp5kcp4WkoUIFSQAICSOi3TDcZYab9m86d+V+1Hybv5lZ1rG8NcXafXn4rBpWR4qfLn04+CQDhOwAAAAAAAAAIV130l1+OqNPsw/px8I5/i2i46XY8rHjvPVVtRveZentHRoTpNAAAXQi20krtuySzbe5JeZjVVFMTVPEMqYmqYiE2ar6EjhMNGmrbb7VSXvTefksl3Io+ZkzkXZrnj0+C3YuPFi3FMfNqOkbRjnQjiKe6pQlt3WexdNv7rUZeTNrS78U3JtV+zX0+32a2pWZqoi5TzT1b7V/SixOGp1lucl2l7s1ukvVPysaORZmxdqtz6fkNzHvRetxXHq5TpR0RtU44mK3wtCp3wk+y34Sf42dXRcnwXJtTxVx8f8AlzdWx/FR5kcx/RGpaVeAFgMlOey2mvn5ZjMb8MonblbUnd3JiNo2RM7rSUAAABWMW8hMpiN2y0DpT/T16dT3ZK7+q90l6NmpmY/nWqqfzds4l/yrkSnOErpNZNXKRMbLbE7riEgAAAAAAPFpnF9ThqtT3ISl6I9bNHmXKaY9Zed2vwUTV2QK5Xzd2833l8imIjaFMmZmd5UMkKAVA6PULAqppCltLdHaqf2rs+e04vyOVq93wY0xHrtDoabb8V+N/TqmJlQWlSpBSTi1dNNNPJp5ocdUTG7hNUajwWkK2Bm+xN7dG/HddeLcFZvnTO1mx/icajJjmOlX5+cuViT5F+qxPE9Y/Pzhste9P0aWHqUG1KrUg4qC+ipK23J/Rte6Wbt5rX03EuXbtNcdIid9/s9s/Kot25onmY4RIXJVhAZPZ8THll7LGZMQgCQAMCsY3ImdkxG6+UrbkREb9ZTM7dIYzJimzUrG9dgKMm7tR2H4wez+xR8+15WRVT71vw7nmWaam8NRsgAAAAAAOZ6Ra+xo6p9Zwj6yV/hc6Gl0eLKp/do6jV4cepDpc1VAAF1NpPeRKYdZ0YS/6g7/APBO399P/Jxtcj/x4/8Ar+0urpE/50/D7JYKqsaytVjCLlJqMUrtt2SSzbbyJiJmdoRMxEbyiPXbWCFfFwqYdtdUklU9lykpOSceNlwvzfna9Mwqrdmqm9HteitZ+XTcuxNv/T6ualJttttttttu7bebbebOtTTFMbRw5szMzvK0yQvjKy7yJjdMSsuSgAAADAAXuW6y8yNu6d+ywlAQJQ6KMRfDVIP6NS68JRX7plW1uja/FXeFj0mrezMdpdwcZ1QAAAAAAHGdKc7YOC51Y/CMn+x19FjfI390uZqs/wCR80UlsVpUAAA32ouL6vSNFvKTdN/fi1H8Wyc3Vbfjxavd1/Pk39NueHIp9/RM5TVqcn0nQk8BdZKrBz7470vxOB1NHmIyo37Ts5uqRP8Ah529yJi3qwEioFAKAAKgAAAAAIAkSF0ST34hd1N/r/grmux1on4u7o89KoSMV92wAAAAAAHGdKcL4KD5VYv8Ml+519FnbI290uZqsf5HzRUWxWl+xZXfkY77ztDLbp1WGTEAup1HGSlF2lFqSfJp3T9TCuiK6ZpniejKiqaKoqj0TzovHRr0KdWOU4qXg3nHxTuvIoV23NuuaKuY6LnauRcoiqPVXSeCjXozpT9mcXF918mu9Oz8hauTbriunmOpctxcommfVBWNwk6VWdKatKEnF+XFdzW/wZe7N6m7biuniVOu2pt1zRPox1IW8eJnE7sJjZYZIAAAABWEb5ETOyYjdWaV9wjfbqTstJQAAAEhdEke1iH3U1+srmuz1oj4u7o8dKpSMV92wAAAAAAHM9I1Db0dUt9Fwl5KSv8AC50dLr8OTS0dRp8WPUiGMbb2W+evCrx05Y2zOGIAAASD0XaZttYWb51KV/xwX6v7it63i7TF+n4T/Z3tJyN4m1PxhIhX3bcX0hauurD/AFNGN6kFaaWc4Lilxcd/ivBI7GlZsWqvKrn9M/SXK1LEm5T5lHMfWEXItitgAAB7tE6Ir4mezRpuXN5Rj9qT3LwzNbIy7ViN7k/L1e9jGuXp2oj7KaU0TWw9Xq6sNmWa4prnFrNE4+Vav0eKiS9jXLNXhrh5ZyVrI9oh5T7lhkxAAAABJ3RPQth6s/eqWXhGK/dsq2uV73ojtCxaRTtame8u6OK6wAAAAAADxaawnXYarT96Eo+bW49bNfguU1dped2jx0TTPqgWV778/wAuZfKZiY3hTKomJ2lQyQAAAGbCVpQqRnB7MotSi+Tjv88sjyu26blE0VcS9LVdVFcVU8wm3V7TEcVQVSO55TjxhNZrw4p8mUjJx6rFyaKvl74W7Hv03qIqj/qWyNd7o5111Lacq+FjdPfUpxW9c5QXFfV9ORYdN1TaItXp+E/2n7uHn6dvvctfOPs4AsUTu4Sqjd2W9vcks33CZiI3lMRMztDpv/wuLWHdZxjdLa6q76xrwW6/de/nuOTOsWJueCN9v5vR0Y0u94PH037O/wBS9LUcRhkqUY03CynTirKL95c4uz3+N96K/nY9yzdnxzvvxPd28K/bu2/0RttzHZ6NZtBQxlBwfZmt9Odt8Zfw8mv3SMMTKqxrnjp+cd2eVjU36PDPylDGOwc6NSVKpHZnF2a/Jrmmt6feXWzeovURXRPSVUu2qrVc0VcsB6vIAoAAy06V7d+W4xmrZlFO6ZdRcH1Wj6Seck5v772l8Gil6jd8zIqmPh+y14Nvy7FMN+aTbAAAAAAAAIT100d1GOqRt2ZPrI+E97/FtFz0y/5uPHeOiq6hZ8u/PaerRnQaKgACqQF77LW/f+RjzCeGz0BrBVwtdVI70904ZKcf2a4Ph4No08zBoybfh4n0n89G1i5ddivxenrCYtD6VpYmkqlKV0819KL4xkuD+cinXrFdmuaK46rTZvUXafFRL2nk9XO6e1Nw2KbnZ06jznCy2vtRyl4595v4upXsfpE7x2lo5GBavdZ6T3hqdBdHyo4iNWpWVRQe1GKhs3kvZbu3k99uaRt5WsVXrU26adt+ev8Aw18fS4tXIrmrfZ3BxXWcNrRoqpg63+vwatxrw+i098pW918eT7XO3Yw79GRR/hr/APtntPb8+DlZVmqxX/iLP+6O7qtB6Wp4qjGrTe57pJ5wks4vvXx3Pic3IsV2Lk0V8t+xeovURXS1GvGrSxVHbgrVqaey/fWbg/25PxZt6dnTjV7T7M8/drZ2HF+jePajj7IfTLmqqoAC6EL9y5mMzsmI3e3Q2HlWr06MfpyS8FnJ+l2eGVcptWqrk+n9fR741E3LlNEJ2pU1GKiskkl5FGmd53W+I2jZeQkAAAAAAAA4rpO0R1mHVeK7VK+13wefo7PwudjR8ny7vgnir+rmapY8y3445j+iLGWtWgAkBkyW7Mx5llxDGzJiAe7Q2l6uFqdZRlZ8U98ZLlKPFfFcDVysS3k0+GuPhPrDYx8muxVvQlbVvW6hi0o36urxhJ5/Yl9JfHuKnl6fdx53nrT3+/ZZMXOt342jpPb85dCaLdAABoIR7pOhPROKVeinLC1ZbM6a+i972V8XF+KfM7lmqNQteVX/AOynie8e/wDPf3ce7E4VzzKPYnmO0sGtuvXWJ0cI2otWnVs1J3W+ME98ftZ8ub9sDSNp8d/9vv8AZ55mp7x4LP7/AGcGWJwwC6EfQiZTEE5cOBEQTLv+i3Q95TxUluV4U/8A3l+S9Sva3k9Ysx8Z/s7mk2Ok3Z+EJHK+7YAAAAAAAAAsq01KLjJXTTTT4pkxO07wiY3jZCOtOhXhMTKn9B9qm+ceXisvTmXTAyoyLUT6xz+e9VM3GmxcmPSeGoN5proSsRMbpidlrJQAAAAiYHR6H12xdC0XLrYe7V3teE/a9bnLyNIsXetP6Z93H7f9OjY1O9b6T1j3/d1eC6SqEv8AdpVIP6rjUivPc/gcq5ol+n2Jifp+fu6VvV7U+1Ex9WxWvuB/5Zf+Kf8ABrfwnL/k+sfd7/xLG/m+kvBjukjDxX9KnUqPhe0I+u9/A97WiZFXtzEfV43NWs0+zEy4jWHWavjLKo1GCd4wgrRvvs3dtydn/hHdw9OtY3WOs95cjKzrl/pPSOzTG+0ggCRdKd0REQmZerRGjZ4mvCjDOT3v3Yr2pPuSNfKyKbFua6vyXtj2JvXIoj8hOejcFChRhSgrRikl/L7ykXLlVyua6uZW63RFFMUx6PSYMwAAAAAAAAAA02tWgY4yg4PdNb6cuUv4eTNvDyqse54o49Ya2VjU36PDPyQtjMLOlUlTqR2ZRdmn85F0tXaLtEV0T0lVLtuq3VNNXLCejzAAAAAAAAAACgFQAAC6nBtpJNtuyS3tt5JLmY1VRTG88Jppmqdo5S/qPq0sJS25r+tNdr6q4QX79/kU/Uc2civaPZjj7rTg4kWKOvM8unOc3gAAAAAAAAAAAAOa1x1VjjIbUbRrRXZlwkvdl3d/D8+hgZ9WNVtPWmeYaWZh036feiHF4adKo6dSLjKLs0+HzzLfau0XaYqoneFYuW6rdXhqjqxHo8wABWMbiZ2TEbrqjWS9SI35knb0WEoEAAAALoQ55ETKYgm7vcrCCVKcHJpJNtuySV228klxIqqimN54TTTNU7RylPUjU/qLV66TqtdmOapp/nLv+XVdR1Gb0+Xb9n+qx4OB5X66/a/o7Q5DpgAAAAAAAAAAAAAAGl1k1ao4yHbWzNLszXtLufNdxt4uZcx6t6eOzWycWi/G1XPdE+ntXq+ElapG8OE4+w//AJfc/iWvFz7WRH6Z2nsrmTh3LE9esd2pN1pqxjcTJEL5StuRjEb9WUz6MZkxAAAABdCNyJlMQTnf5+fliIJnd69E6JrYmexRg5Pi8ox75S4fma+RlWrFO9c/L1e9jGuXp2oj5+iVdVdT6WEW3L+pWtvk1uj3RXDxzKrm6jcyJ24p7LHiYNFiN+Z7umOe3QAAAAAAAAAAAAAAAAAsrUozi4ySknuaaun5ExMxO8ImInpLi9N9HdKbcsPLqn7r3wfhxj5eh2MbWLtvpc/VH1cy/pduvrR0n6OI0vqzicPvnSdt/ahece53W9eZ28fUbF3irb49HIvYN636b/BpUb8NLYAAAAGSjC9/n5/yY1VbMqad3vwegq9eVqNKUlu32tFfee5mrczrNqN66mxRh3bk/ppdnoTo4StLFTv9SF0vOeb8rHGydaqq6Wo29/q6uPpNMdbk7+53eCwdOjBQpQjCKyUVZHEruVVz4qp3l16KKaI2phnMGQAAAAAAAAAAAAAAAAAAAAA0BrMfoDDVv9yjCT57Npf3Lee9vJvW/YqmHjXj2q/apiWkxHR3hJez1kPszv8AqubtGsZNPMxPyalWl48+mzwz6M6XCvU81F/se8a5e9aY+v3eP8Htd5Uj0ZUuNep5KP8AAnXLv8sfX7n8HtfzS9eH6OMLH2pVZ+Mkv0pHlXrOTPG0fL7vWnSrEc9W6wOq+EotOFCF1k5Lal6yuzSu5l+57VUtq3i2qPZpht4xSyNZsKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q==" 
                    alt="Phone" 
                    className='w-10 h-10'
                  /></span>
              <span>(+92) 3086724165</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-white'> <img 
                    src="data:image/jpeg;base64,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" 
                    alt="Location" 
                    className='w-10 h-10'
                  /></span>
              <span> Mianwali, Pakistan</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-white'></span>
              <div className='flex gap-4'>
                <a href="https://github.com/SyedAoun95" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                    alt="GitHub" 
                    className='w-10 h-10'
                  />
                </a>
                <a href="https://www.linkedin.com/in/syed-aoun-naqvi-689b96275/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                    alt="LinkedIn" 
                    className='w-10 h-10'
                  />
                </a>
                 <a href="https://api.whatsapp.com/send?phone=+923086724165" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    className='w-10 h-10'
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <button
              type='button'
              onClick={handleSubmit}
              className='bg-purple-600 py-3 px-8 rounded-xl outline-none w-48 text-white font-bold shadow-md shadow-purple-900 text-lg'
            >
              {loading ? "Opening Email..." : "Send Email"}
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-[650px] md:h-[600px] h-[400px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");