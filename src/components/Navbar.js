import React from 'react';

const Navbar = () => {
    return (
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal" contentEditable="true" spellCheck="false">AKGUL Family LTD.</h5>
      <nav class="my-2 my-md-0 mr-md-3" contentEditable="true" spellCheck="false">
        <a class="p-2 text-dark" href="#">Features</a>
        <a class="p-2 text-dark" href="#">Enterprise</a>
        <a class="p-2 text-dark" href="#">Support</a>
        <a class="p-2 text-dark" href="#">Pricing</a>
      </nav>
      <a class="btn btn-outline-primary" href="#">Sign up</a>
    </div>
    );
};

export default Navbar;