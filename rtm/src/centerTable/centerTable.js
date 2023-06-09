import './centerTable.css';
const centerTable = () => {
    return (<div className='centerTable_parent'>
        <div className='Centers_add_center_button_div'>
            <h3>Centers</h3>
            <button class="add_center_button">Add Centers</button>
        </div>
        
        <div className='centerTable_content'>
            <table>
                <thead>
                    <tr>
                        <th>SI.NO</th>
                        <th>Centers Name</th>
                        <th>Place</th>
                        <th>Total Base Stations</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            01
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>);
};

export default centerTable;