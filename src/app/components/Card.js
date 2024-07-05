import Image from "next/image";
import c1 from "../../../public/c1.png";
import c2 from "../../../public/c2.png";
import c3 from "../../../public/c3.png";
import c4 from "../../../public/c4.png";
import c5 from "../../../public/c5.png";
import c6 from "../../../public/c6.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carousel() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <Image src={c1} className="card-img-top" alt="Card 1" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">เสือดาวป่า</h5>
                <p className="card-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">อัปเดตเมื่อ 1 วันที่แล้ว</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image src={c2} className="card-img-top" alt="Card 2" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">เสือโคร่งป่า</h5>
                <p className="card-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">อัปเดตเมื่อ 1 วันที่แล้ว</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image src={c3} className="card-img-top" alt="Card 3" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">หมาป่า</h5>
                <p className="card-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">อัปเดตเมื่อ 1 วันที่แล้ว</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <Image src={c4} className="card-img-top" alt="Card 1" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">สิงโตป่า</h5>
                <p className="card-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">อัปเดตเมื่อ 1 วันที่แล้ว</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image src={c5} className="card-img-top" alt="Card 2" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">แรดป่า</h5>
                <p className="card-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">อัปเดตเมื่อ 1 วันที่แล้ว</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image src={c6} className="card-img-top" alt="Card 3" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">ช้างป่า</h5>
                <p className="card-text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">อัปเดตเมื่อ 1 วันที่แล้ว</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
