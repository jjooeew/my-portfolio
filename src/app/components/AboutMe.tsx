export default function AboutMe() {
  return (
    <section className="flex flex-col gap-2 bg-black text-white p-5">
      <h2 className="text-3xl">About Me</h2>
      <div className="pl-4 mb-5 flex flex-col gap-2">
        <p>Name: Joe Walker</p>
        <p>Age: 29</p>
        <p>
          I began programming four years ago while studying for a Diploma in
          Software Development at Whitecliffe College. Since graduating aI’ve
          worked on a range of short-term projects building websites and
          resolving IT issues for clients. Most of this work involved WordPress
          development and email or connectivity troubleshooting.
        </p>
        <p>
          Outside of client work, I’ve continued to sharpen my full-stack
          development skills - building personal projects, experimenting with
          modern frameworks and expanding my technical toolkit. I’m now focused
          on moving forward into a dedicated software development career where I
          can contribute to meaningful projects and keep growing as a developer.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-2xl">Dev Skills: </p>
        <div className="grid-cols-2 gap-5 px-4">
          <div className="col-span-1">
            <p className="text-xl">Core Languages</p>
            <ul className="flex justify-evenly py-3">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>HTML5</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="col-span-1">
            <p className="text-xl">Fronend Frameworks & Libraries</p>
            <ul className="flex justify-evenly py-3">
              <li>React.js</li>
              <li>Next.js</li>
              <li>React Native</li>
              <li>Tailwind</li>
              <li>shadcn/ui</li>
            </ul>
          </div>
          <div className="col-span-1">
            <p className="text-xl">Backend & Databases</p>
            <ul className="flex justify-evenly py-3">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB & Mongoose ORM</li>
              <li>Firebase & Firestore</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
