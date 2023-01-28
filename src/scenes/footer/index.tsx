import logo from "@/assets/logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0"></div>
        <div>
          <img alt="logo" src={logo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum earum
            ullam impedit suscipit voluptatem adipisci odit! Placeat autem,
            rerum commodi doloribus consequatur, earum cum veniam impedit
            blanditiis vero officia beatae?
          </p>
          <p>(C) EvoGYM All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lorem, ipsum dolor..</p>
          <p>(555) 555-5055</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
