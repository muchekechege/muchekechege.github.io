import './index.css';

function App() {
	return (
		<>
			{/*  title*/}
			<h1 className='text-green-500'>Mucheke chege Resume</h1>
			{/* skills */}
			<ul>
				<li>React/NextJs</li>
				<li>React Native</li>
				<li>Nodejs/Expressjs</li>
				<li>Vanilla Javascript</li>
				<li>Typescript</li>
				<li>Tailwind</li>
				<li>Mysql</li>
				<li>Redis</li>
				<li>Nginx</li>
				<li>Docker</li>
				<li>Bash</li>
			</ul>

			<a
				href='https://wa.me/+254747177734'
				className='underline text-green-500 hover:text-red-500'
			>
				Click to Whatsapp
			</a>
			<br />

			<a
				href='https://github.com/muchekechege/'
				className='underline text-slate-900 hover:text-slate-500'
			>
				Check myGithub (Most Projects are private)
			</a>
		</>
	);
}

export default App;
