import React, { useRef } from 'react';

import '../styles/Contact.css';
function Contact() {
	const firstNameInputRef = useRef('');
	const LastNameInputRef = useRef('');
	const EmailInputRef = useRef('');
	const SubjectInputRef = useRef('');
	const DescriptionInputRef = useRef('');

	const submitHandler = (e) => {
		e.preventDefault();
		// send to backend(firebase)

		const firstName = firstNameInputRef.current.value;
		const LastName = LastNameInputRef.current.value;
		const Email = EmailInputRef.current.value;
		const Subject = SubjectInputRef.current.value;
		const Description = DescriptionInputRef.current.value;

		const data = {
			firstName,
			LastName,
			Email,
			Subject,
			Description,
		};

		console.log(data);
		firstNameInputRef.current.value = '';
		LastNameInputRef.current.value = '';
		EmailInputRef.current.value = '';
		SubjectInputRef.current.value = '';
		DescriptionInputRef.current.value = '';
	};

	return (
		<div className='contain'>
			<div className='wrapper'>
				<div className='contacts'>
					<h3>My Address</h3>

					<ul className='address_list'>
						<li>96 Wanstead Ave, Scarborough</li>
						<li>Toronto, ON</li>
						<li>+1(416)844-1786</li>
						<li>vinaykumar785557@gmail.com</li>
					</ul>
				</div>

				<div className='form'>
					<h3>Send me a message</h3>
					<form onSubmit={submitHandler}>
						<p>
							<label htmlFor=''>First Name</label>
							<input type='text' ref={firstNameInputRef} />
						</p>
						<p>
							<label htmlFor=''>Last Name</label>
							<input type='text' ref={LastNameInputRef} />
						</p>
						<p>
							<label htmlFor=''>Email Address</label>
							<input type='text' ref={EmailInputRef} />
						</p>
						<p>
							<label htmlFor=''>Subject</label>
							<input type='text' ref={SubjectInputRef} />
						</p>
						<p className='full-width'>
							<label htmlFor=''>Write your message</label>
							<textarea
								name=''
								id=''
								cols='30'
								rows='7'
								ref={DescriptionInputRef}></textarea>
						</p>
						<p className='full-width'>
							<button className='contact_btn' type='submit'>
								Send
							</button>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
