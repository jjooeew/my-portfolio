export default function Projects() {
  return (
    <section className="text-white flex flex-col gap-5">
      <h2 className="text-3xl pl-5">Projects</h2>
      <div className="pl-9">
        <div>
          <p className="font-bold text-2xl">Project 1 - Pasifika Hub</p>
          <p>
            This is a project that was originally done for my final paper at
            university. It is a website and app in which users can select a
            country then find activities and locations that might be of
            interest.
          </p>
          <p className="font-bold text-xl">Tech Stack:</p>
          <p>
            MERN (MongoDB, Express, React, Node.js) + Firebase (Auth, Firestore,
            Storage) + Tailwind CSS + React Native (Expo)
          </p>
          <p className="font-bold text-xl">Architecture:</p>
          <p>
            Monorepo with shared backend, web, and mobile frontends connected
            via REST API and Firebase Authentication.
          </p>
          <div className="mb-5">
            <ul>
              <p className="py-5 font-bold text-xl">Highlights:</p>
              <li className="mb-5">
                <p className="font-bold">- MERN + Firebase:</p>
                It uses the MERN stack, while also integrating Firebase for
                authentication and Firestore for user uploaded images, the URL{"'"}s
                of which are stored in MongoDB.
              </li>
              <li className="mb-5 flex flex-col">
                <p className="font-bold">- Post Feed:</p>
                Users have a Facebook type feed on their profile where they can
                upload posts with a location tag, images and text.
              </li>
              <li className="mb-5 flex flex-col">
                <p className="font-bold">- Admin Dashboard:</p>
                There are two tiers of accounts - admins and users. Admins have
                access to an admin dashboard where they can view and edit
                countries and activities. Normal users can view these countries
                and activities and like or save them for future reference.
              </li>
            </ul>
            <a
              href="https://github.com/jjooeew/Pasifika_Travel_Hub.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white text-center w-40 p-3 bg-red-500 rounded-xl"
            >
              View on Github
            </a>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl">Project 2 -</p>
        </div>
      </div>
    </section>
  );
}
