import { DEALERLIST } from "./dealersList";
export function Products() {
    return (
        <>
            <div class="container ">
                <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                    <div class="row ">

                        <div class="col-sm-3 mt-5 mb-4 text-gred">
                            <div className="search">
                                <form class="form-inline">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search" />

                                </form>
                            </div>
                        </div>
                        <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "green" }}><h2><b>Product Details</b></h2></div>
                        <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">

                        </div>
                    </div>
                    <div class="row">
                        <div class="table-responsive " >
                            <table class="table table-striped table-hover table-bordered">
                                <thead>
                                    <tr>

                                        <th>Name </th>
                                        <th>Phone</th>
                                        <th>Rating </th>
                                        <th>active products </th>
                                        <th>Actions</th>
                                        <th>Sno.</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {DEALERLIST.map((dealers) => {
                                        return (
                                            <tr>
                                                <td>{dealers.SNo}</td>
                                                <td>{dealers.Name}</td>
                                                <td>{dealers.Phone}</td>
                                                <td>{dealers.Email}</td>
                                                <td>{dealers.Rating}</td>
                                                <td>{dealers.Actions}</td>
                                                <td>{dealers.Actions}</td>
                                                <td style={{ display: "flex", alignItems: "center" }}>
                                                    {/* <a href="#" class="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><i class="material-icons">&#xE417;</i></a> */}
                                                    <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons" style={{ padding: "2px", marginRight: "4px", color: "white", background: "blue", borderRadius: "4px" }}>&#xE254;</i></a>
                                                    <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{ color: "white", padding: " 0 2px ", marginBottom: "2px", background: "red", borderRadius: "6px", objectFit: "contain" }}><i class="material-icons">&#xE872;</i></a>

                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>


                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
