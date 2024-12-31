import React from 'react';

const Modal = () => {
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="card w-full">
                        <form className="card-body pb-0">
                            <div className="form-control">
                                <input name="name" type="text" placeholder="Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input name="number" type="number" placeholder="Phone Number" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-cyan-400 text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;