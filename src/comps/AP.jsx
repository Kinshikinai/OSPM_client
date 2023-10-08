import './AP.css';
import { CreatorRequest } from './CreatorRequest';

export function AP() {
    const ap_password = document.location.search.replace('?', '');
    return (
        <div className="ap">
            <div className="apblock">
                <div className="crs">
                    <CreatorRequest name="Yerassyl Kairkanuly" />
                    <CreatorRequest name="Anilmansur Zhunyskenov" />
                    <CreatorRequest name="Daulet Orlkhanov" />
                    <CreatorRequest name="Darkhan Soltangazy" />
                </div>
            </div>
        </div>
    );
};