import React from "react";

const Info = () => {
	return (
		<div className='custom-px-3'>
			<section id='overview'>
				<h2 className='is-size-2-desktop is-size-3-mobile'>Overview</h2>
				<p>
					Coronaviruses are a family of viruses that can cause illnesses such as
					the common cold, severe acute respiratory syndrome (SARS) and Middle
					East respiratory syndrome (MERS). In 2019, a new coronavirus was
					identified as the cause of a disease outbreak that originated in
					China.
				</p>
				<br />

				<p>
					The virus is now known as the{" "}
					<span className='has-text-danger'>
						severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2)
					</span>
					. The disease it causes is called coronavirus disease 2019 (COVID-19).
				</p>
			</section>
			<br />
			<section id='symptoms'>
				<h2 className='is-size-2-desktop is-size-3-mobile'>Symptoms</h2>
				<p>
					Signs and symptoms of coronavirus disease 2019 (COVID-19) may appear{" "}
					<strong>2 to 14 days</strong> after exposure. This time after exposure
					and before having symptoms is called the <em>incubation period</em>.
					<br />
					Common signs and symptoms can include:
				</p>
				<ul className='custom-pl-4'>
					<li>Fever</li>
					<li>Cough</li>
					<li>Shortness of breath or difficulty breathing</li>
				</ul>
				<p>Other symptoms can include:</p>
				<ul className='custom-pl-4'>
					<li>Tiredness</li>
					<li>Aches</li>
					<li>Chills</li>
					<li>Sore throat</li>
					<li>Loss of smell</li>
					<li>Loss of taste</li>
					<li>Headache</li>
					<li>Diarrhea</li>
					<li>Severe vomiting</li>
				</ul>
				<br />
				<p>
					The severity of COVID-19 symptoms can range from very mild to severe.
					Some people may have only a few symptoms, and some people may have no
					symptoms at all. People who are older or who have existing chronic
					medical conditions, such as heart disease, lung disease, diabetes,
					severe obesity, chronic kidney or liver disease, or who have
					compromised immune systems may be at higher risk of serious illness.
					This is similar to what is seen with other respiratory illnesses, such
					as influenza.
				</p>
				<br />
				<p>
					Some people may experience worsened symptoms, such as worsened
					shortness of breath and pneumonia, about a week after symptoms start.
				</p>
			</section>
			<br />
			<section id='prevention'>
				<h2 className='is-size-2-desktop is-size-3-mobile'>Prevention</h2>
				<h3 className='is-size-3-desktop is-size-4-mobile'>How it spreads</h3>
				<p>
					The disease spreads primarily from person to person through small
					droplets from the nose or mouth, which are expelled when a person with
					COVID-19 coughs, sneezes, or speaks. These droplets are relatively
					heavy, do not travel far and quickly sink to the ground. People can
					catch COVID-19 if they breathe in these droplets from a person
					infected with the virus. This is why it is important to stay at least
					1 metre (3 feet) away from others. These droplets can land on objects
					and surfaces around the person such as tables, doorknobs and
					handrails. People can become infected by touching these objects or
					surfaces, then touching their eyes, nose or mouth. This is why it is
					important to wash your hands regularly with soap and water or clean
					with alcohol-based hand rub.
				</p>
				<br />
				<h3 className='is-size-3-desktop is-size-4-mobile'>What can i do?</h3>
				<p>
					Regularly and thoroughly clean your hands with an alcohol-based hand
					rub or wash them with soap and water. Why? Washing your hands with
					soap and water or using alcohol-based hand rub kills viruses that may
					be on your hands.
				</p>
				<br />
				<p>
					Maintain at least 1 metre (3 feet) distance between yourself and
					others. Avoid crowded places. Why? When someone coughs, sneezes, or
					speaks they spray small liquid droplets from their nose or mouth which
					may contain virus. If you are too close, you can breathe in the
					droplets, including the COVID-19 virus if the person has the disease.
				</p>
				<br />
				<p>
					Avoid touching eyes, nose and mouth. Why? Hands touch many surfaces
					and can pick up viruses. Once contaminated, hands can transfer the
					virus to your eyes, nose or mouth. From there, the virus can enter
					your body and infect you.
				</p>
				<br />
				<p>
					Make sure you, and the people around you, follow good respiratory
					hygiene. This means covering your mouth and nose with your bent elbow
					or tissue when you cough or sneeze. Then dispose of the used tissue
					immediately and wash your hands. Why? Droplets spread virus. By
					following good respiratory hygiene, you protect the people around you
					from viruses such as cold, flu and COVID-19.
				</p>
				<br />
				<p>
					Stay home and self-isolate even with minor symptoms such as cough,
					headache, mild fever, until you recover. Have someone bring you
					supplies. If you need to leave your house, wear a mask to avoid
					infecting others. Why? Avoiding contact with others will protect them
					from possible COVID-19 and other viruses.
				</p>
				<br />
				<p>
					Keep up to date on the latest information from trusted sources, such
					as{" "}
					<a
						href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019'
						target='_blank'
						rel='noopener noreferrer'>
						WHO
					</a>
					,{" "}
					<a
						href='https://www.cdc.gov/coronavirus/2019-ncov/index.html'
						target='_blank'
						rel='noopener noreferrer'>
						CDC
					</a>
					, or your local and national health authorities.
				</p>
			</section>
			<br />
			<section id='treatment'>
				<h2 className='is-size-2-desktop is-size-3-mobile'>Treatment</h2>
				<p>
					<strong>Not yet</strong>. To date, there is
					<span className='has-text-danger'> no vaccine</span> and no specific
					antiviral medicines against COVID-19. However, people, particularly
					those with serious illness, may need to be hospitalized so that they
					can receive life-saving treatment for complications. Most patients
					recover thanks to such care.
				</p>
				<br />
				<p>
					Possible vaccines and some specific drug treatments are currently
					under investigation. They are being tested through clinical trials.
					WHO is coordinating efforts to develop vaccines and medicines to
					prevent and treat COVID-19.
				</p>
			</section>
			<section
				className='custom-p-3 has-background-grey-light'
				id='find-out-more'>
				<a
					className='has-text-white'
					href='https://www.who.int/news-room/q-a-detail/q-a-coronaviruses'
					target='_blank'
					rel='noopener noreferrer'>
					Find out more
				</a>
			</section>
		</div>
	);
};

export default Info;
