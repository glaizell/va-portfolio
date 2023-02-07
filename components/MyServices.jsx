import Image from 'next/image';
import WebDevelopment from '/public/assets/services/WebDevelopment.svg';
import DataEntry from '/public/assets/services/DataEntry.svg';
import EmailManagement from '/public/assets/services/EmailManagement.svg';
import OnlineResearch from '/public/assets/services/OnlineResearch.svg';
import Wordpress from '/public/assets/services/Wordpress.svg';
import VirtualAssistant from '/public/assets/services/VirtualAssistant.svg';

function MyServices() {
  return (
    <div id='skills' className='w-full p-2 py-16'>
      <div className='max-w-[1240px] m-auto'>
        <div>
          <p className='uppercase text-xl tracking-widest text-[#FFD000]'>
            Specialized In
          </p>
          <h2 className='py-8 ]'>What I Offer?</h2>

          <div className='md:max-w-5xl max-w-sm m-auto '>
            <div className='border  p-4 md:px-12 md:grid grid-cols-3 mb-8'>
              <div className='flex justify-center items-center'>
                <DataEntry className='text-9xl mx-auto cursor-pointer hover:scale-110 ease-in duration-300' />
              </div>
              <div className='p-2 col-span-2  '>
                <h3 className='mb-4 text-[#FFD000]'>Data Entry</h3>
                <ul className='list-disc p-4'>
                  <li>
                    Accurately entered large amounts of information into
                    spreadsheet programs such as Microsoft Excel or Google
                    Sheets.
                  </li>
                  <li>
                    Managed and organized large amounts of information according
                    to established procedures.
                  </li>
                  <li>
                    Utilized various data entry techniques, such as copy-paste,
                    data import, or manual input.
                  </li>
                  <li>
                    Completed projects within tight deadlines, maintaining a
                    high level of accuracy and attention to detail.
                  </li>
                </ul>
              </div>
            </div>

            <div className='border  p-4 md:px-12 md:grid grid-cols-3 mb-8'>
              <div className='p-2 col-span-2  '>
                <h3 className='mb-4 text-[#FFD000]'>Online Research</h3>
                <ul className='list-disc p-4'>
                  <li>
                    Data collection - gathering information on specific topics
                    or industries from various sources such as websites,
                    databases, and social media.
                  </li>
                  <li>
                    Fact-checking - verifying the accuracy and reliability of
                    information found online.
                  </li>
                  <li>
                    Contact research - finding and verifying contact information
                    for individuals or organizations.
                  </li>
                  <li>
                    Event research - gathering information on upcoming events
                    and searching groups on different online platforms to
                    promote the upcoming events.
                  </li>
                  <li>
                    Candidate research - looking for potential candidates.via
                    online platforms, checking their previous work to see if
                    they are qualified.
                  </li>
                  <li>
                    Company research - gathering information on companies, such
                    as their services, and identify potential candidates.
                  </li>
                </ul>
              </div>
              <div className='flex justify-center items-center'>
                <OnlineResearch className='text-9xl mx-auto cursor-pointer hover:scale-110 ease-in duration-300' />
              </div>
            </div>

            <div className='border p-4 md:px-12 md:grid grid-cols-3 mb-8'>
              <div className='flex justify-center items-center'>
                <EmailManagement className='text-9xl mx-auto cursor-pointer hover:scale-110 ease-in duration-300' />
              </div>
              <div className='py-2 col-span-2  '>
                <h3 className='mb-4 text-[#FFD000]'>Email Management</h3>
                <ul className='list-disc p-4'>
                  <li>
                    Inbox management - organizing and prioritizing incoming
                    emails, responding to routine inquiries, and forwarding
                    important messages to the appropriate party.
                  </li>
                  <li>
                    Email filtering - setting up filters to sort and categorize
                    incoming emails, such as spam, newsletters, and important
                    messages.
                  </li>
                  <li>
                    Email scheduling - scheduling emails to be sent at a
                    specific time and date, such as follow-up emails and
                    reminders.
                  </li>
                  <li>
                    Email template creation - creating and managing standardized
                    email templates to be used for routine or repetitive
                    communications.
                  </li>
                  <li>
                    Email archiving - organizing and storing old or important
                    emails for future reference.
                  </li>
                  <li>
                    Email marketing - creating, designing, and executing email
                    marketing campaigns to promote products, services, or
                    events.
                  </li>
                </ul>
              </div>
            </div>

            <div className='border p-4 md:px-12 md:grid grid-cols-3 mb-8'>
              <div className='py-2 col-span-2  '>
                <h3 className='mb-4 text-[#FFD000]'>Web Development</h3>
                <ul className='list-disc p-4'>
                  <li>
                    Web development - building and maintaining websites and web
                    applications using React and Next.js.
                  </li>
                  <li>
                    UI/UX design - designing user-friendly and visually
                    appealing interfaces for web applications.
                  </li>
                  <li>
                    Responsive design - ensuring that web applications are
                    compatible and accessible on various devices, such as
                    desktop computers, laptops, and mobile devices.
                  </li>
                  <li>
                    Version control - managing version control systems, such as
                    Git, to track changes to the code and collaborate with other
                    developers.
                  </li>
                </ul>
              </div>
              <div className='flex justify-center items-center'>
                <WebDevelopment className='text-9xl mx-auto cursor-pointer hover:scale-110 ease-in duration-300' />
              </div>
            </div>

            <div className='border p-4 md:px-12 md:grid grid-cols-3 mb-8'>
              <div className='flex justify-center items-center'>
                <Wordpress className='text-9xl mx-auto cursor-pointer hover:scale-110 ease-in duration-300' />
              </div>
              <div className='py-2 col-span-2  '>
                <h3 className='mb-4 text-[#FFD000]'>WordPress Development</h3>
                <ul className='list-disc p-4'>
                  <li>
                    Website creation - designing and building WordPress websites
                    using the Elementor page builder.
                  </li>
                  <li>
                    Page design - using Elementor to design and create custom
                    pages, such as landing pages, product pages, and portfolio
                    pages.
                  </li>
                  <li>
                    Content management - creating and managing the content, such
                    as text, images, and videos, for WordPress websites.
                  </li>
                </ul>
              </div>
            </div>

            <div className='border p-4 md:px-12 md:grid grid-cols-3 mb-8'>
              <div className='flex justify-center items-center'>
                <VirtualAssistant className='text-9xl mx-auto cursor-pointer hover:scale-110 ease-in duration-300' />
              </div>
              <div className='py-2 col-span-2  '>
                <h3 className='mb-4 text-[#FFD000]'>General VA Task</h3>
                <ul className='list-disc p-4'>
                  <li>
                    Administrative support - performing routine administrative
                    tasks, such as managing calendars, and organizing files.
                  </li>
                  <li>
                    Calendar management - Reviewing the client&#39;s calendar
                    and schedule to identify upcoming events or important dates.
                    Sending a reminder email, text message, or phone call to the
                    client in advance of the event or occasion to ensure they
                    are aware of the date and time.
                  </li>
                  <li>
                    Contact management - updating and maintaining a database of
                    contacts, including their contact information and
                    communication history.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyServices;
