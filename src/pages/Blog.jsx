import React from 'react';
import foto1 from './pagesImage/foto1.png';
import { AiOutlineSearch } from 'react-icons/ai';
import fotolink from './pagesImage/12.jpg';
import fotohover from './pagesImage/13.jpg';

const Blog = () => {
  return (
    <div className="blog mt-24 w-10/12 ml-44 ">
      <section className="w-3/5">
        <div>
          <img src={foto1} alt="" className="h-[800px] mt-10" />
        </div>
        <p className="text-2xl text-white mb-5 mt-10 font-bold">
          OH MAMMA, I’M IN LOVE WITH GRADIENT
        </p>
        <div>
          {' '}
          <p className="text-orange-600">MARKULOVE</p>
        </div>
        <p className="text-2xl text-white mb-5 mt-10 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
          euismod ante, eu vestibulum lectus. Quisque luctus magna sed euismod
          vulputate. Praesent sit amet eleifend sapien, ut tincidunt nibh. Cras
          at fringilla leo. Phasellus posuere nibh erat, nec vestibulum purus
          lacinia ut. Donec sit amet ex placerat, condimentum tellus a, molestie
          eros. Cras nec faucibus metus.
        </p>
        <p>
          Donec at mi non arcu interdum venenatis. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Sed
          condimentum mauris scelerisque nibh porta luctus. Nam sodales velit in
          est tincidunt dignissim. Pellentesque imperdiet leo ac mauris suscipit
          iaculis. Mauris auctor ipsum quis massa condimentum sagittis. Fusce
          ullamcorper, dui at rutrum lacinia, nisi lacus malesuada sapien, ut
          eleifend felis quam non purus. Donec in porta dolor.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
          euismod ante, eu vestibulum lectus. merkulove
        </p>
        <p>
          Mauris eget nisi id odio dignissim hendrerit a in eros. Morbi sed
          posuere arcu, ac commodo magna. Vestibulum quis lectus non sem aliquet
          mattis interdum in velit. Nunc ac lectus non sapien pellentesque
          consequat. Sed scelerisque dignissim tortor et porta. Fusce suscipit
          ex eget varius posuere. Maecenas vitae metus quis elit maximus
          lacinia. Nam vitae enim sed diam aliquet iaculis sit amet id est.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
          dictum ipsum. Nunc ac erat nec orci vulputate cursus eget in urna.
          Morbi mi nisi, mattis lobortis nulla vitae, commodo convallis velit.
          Nam dui lectus, rutrum ultricies fringilla ac, viverra nec risus.
          Nulla iaculis dignissim turpis sit amet gravida.
        </p>
        <p className="text-2xl text-white mb-5 mt-10 font-bold">
          About WordPress Template Kit
        </p>

        <li>aliquam posuere at tellus et maximus</li>
        <li>cras at nunc ullamcorper, fringilla dui sit amet</li>
        <li>scelerisque velit. Aenean eu volutpat lectus.</li>
        <li className="mb-10">aenean laoreet mi id dignissim mattis</li>

        <p>
          Proin cursus pellentesque nisl, a laoreet justo tempor nec. Vestibulum
          non est orci. Praesent sed massa facilisis, faucibus quam ac, cursus
          lorem. Curabitur tempor sapien et justo aliquet faucibus. Morbi
          gravida felis justo, lacinia tincidunt mauris porta at. Mauris eget
          est orci. Maecenas lacinia augue ut ultricies dictum. Donec tincidunt
          pulvinar arcu, id aliquam orci euismod commodo. Aenean sed pharetra
          sapien, a varius libero. Phasellus porta dignissim pharetra. Etiam id
          facilisis est. Suspendisse ultrices eros vitae venenatis vehicula. Sed
          laoreet velit non vestibulum cursus. Nam vel sapien sit amet elit
          gravida auctor id a elit. Mauris a tempor turpis. In ultricies odio
          risus.
        </p>
        <p className="text-4xl text-white mb-5 mt-10 font-bold">
          Leave a Reply
        </p>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <div>
          <p>Comment *</p>

          <textarea
            className="bg-transparent border-[1px] font-bold p-2"
            cols="65"
            rows="10"
          ></textarea>
          <p>Name*</p>
          <input
            type="text"
            className="border-[1px] bg-transparent h-11 w-[605px] font-bold p-2"
          />
          <p>Email*</p>
          <input
            type="text"
            className="border-[1px] bg-transparent h-11 w-[605px] font-bold p-2"
          />
          <p>Website</p>
          <input
            type="text"
            className="border-[1px] bg-transparent h-11 w-[605px] font-bold p-2 mb-10"
          />

          <p className="mb-5">
            <input type="checkbox" />
            Save my name, email, and website in this browser for the next time I
            comment.
          </p>
          <button className="nav-btn ml-0 font-bold mb-5">POST COMMENT</button>
        </div>
      </section>
      <section className="w-2/5 ml-12">
        <div className=" mt-10 flex space-x-5">
          <input
            type="search"
            placeholder="    SEARCH..."
            className="h-14 w-72 bg-transparent border-[1px] text-2xl font-bold p-3 text-left "
          />
          <AiOutlineSearch size={40} className="mt-1" />
        </div>

        <div className="mt-14  font-bold text-3xl">
          <p>RECENT POSTS</p>
        </div>

        <div className="flex mt-14 ">
          <a href="http://localhost:3000/blog/">
            <img src={fotolink} alt="" className="w-28 h-36 " />
          </a>
          <div className="ml-4">
            <a href="http://localhost:3000/blog/" className="font-bold">
              OH MAMMA, I’M IN LOVE WITH GRADIENT
            </a>
            <p className="mt-2 text-orange-600 ">AUGUST 15, 2020</p>
          </div>
        </div>

        <div className="flex mt-14 ">
          <a href="http://localhost:3000/blog/">
            <img src={fotolink} alt="" className="w-28 h-36 " />
          </a>
          <div className="ml-4">
            <a href="http://localhost:3000/blog/" className="font-bold">
              OH MAMMA, I’M IN LOVE WITH GRADIENT
            </a>
            <p className="mt-2 text-orange-600 ">AUGUST 15, 2020</p>
          </div>
        </div>

        <div className="text-white font-bold flex flex-col mt-40">
          <p className="text-2xl mb-7">CATEGORIES</p>

          <a
            href="http://localhost:3000/blog/"
            className="mb-3 hover:text-orange-600 transition-transform duration-300 hover:translate-y-2"
          >
            UNCATEGORIZED
          </a>
          <a
            href="http://localhost:3000/blog/"
            className="mb-3 hover:text-orange-600 transition-transform duration-300 hover:translate-y-2"
          >
            HAIRCUT
          </a>
          <a
            href=""
            className="mb-3 hover:text-orange-600 transition-transform duration-300 hover:translate-y-2"
          >
            BEARD CARE
          </a>
          <a
            href=""
            className="mb-3 hover:text-orange-600 transition-transform duration-300 hover:translate-y-2"
          >
            COSMETICS
          </a>
          <a
            href=""
            className="mb-3 hover:text-orange-600 transition-transform duration-300 hover:translate-y-2"
          >
            BARBER
          </a>
          <a
            href=""
            className="mb-3 hover:text-orange-600 transition-transform duration-300 hover:translate-y-2"
          >
            HAIRSTYLE
          </a>
        </div>

        <div className="mt-40 relative">
          <img
            src={fotohover}
            alt=""
            className="h-[500px] transition-transform"
          />
          <div className="absolute inset-0 bg-slate-900 opacity-0 hover:opacity-100 transition-opacity duration-1000 flex flex-col ">
            <p className="text-white text-sm font-bold items-start justify-start mt-14">
              %10 %10 %10 %10 %10 %10 %10 %10 %10 %10 %10 %10 %10 %10 %10
            </p>
            <div className="transition-transform hover:scale-110">
              <p className="text-white text-2xl !items-center !justify-center text-left mt-16 ml-10 font-bold">
                BRING A FRIEND AND GET A 10% DISCOUNT CARD
              </p>

              <p className="font-bold ml-10 mt-2">
                Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
                dolor
              </p>
              <button className="nav-btn transition-transform hover:translate-y-2 mt-4 ml-10 ">
                LEARN MORE
              </button>
            </div>
            <p className="text-white text-sm font-bold items-end justify-end mt-20">
              %10 %10 %10 %10 %10 %10 %10 %10 %10 %10 %10 %10 %10 %10 %10
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
