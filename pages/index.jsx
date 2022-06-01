import Head from "next/head";
import SimpleLayout from "../components/layout/simple.jsx";

export default function Home(initialData) {
  return (
    <SimpleLayout>
      <Head>
        <title>Next and Bootstrap</title>
        <meta
          name="description"
          content="A demo about NextJS and Bootstrap 5"
        />
      </Head>
      <div class="card" style={{ width: "40rem" }}>
        <div class="card-body">
          <h5 class="card-title text-center">Example Project SCG Test</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Devolop By Witsanu Phontaisong
          </h6>
          <ul class="list-group list-group-flush">
            <p class="card-text">
              <li class="list-group-item">
                1. สร้างเว็บไซด์โดยมี Layout (Top Bar, Menu Bar, Body, Footer)
                โดยใช้เครื่องมือต่อไปนี้ - ReactJS - สามารถใช้ UI สำเร็จรูปเช่น
                Antd และ Framework เช่น Next js / Vue js ได้ตามต้องการ
              </li>
              <li class="list-group-item">
                2. สร้างแบบฟอร์มสำหรับสมัครสมาชิก 1 หน้าโดยมีรายละเอียดดังนี้ -
                Frontend ข้อมูลที่ต้องการเก็บ ชื่อผู้ใช้งาน, รหัสผ่าน, ชื่อจริง,
                นามสกุล, เบอร์ติดต่อ, อีเมล์ - Back end พัฒนาโดย Nodejs และใช้
                Library ตามความถนัด - เก็บข้อมูลโดยใช้ MongoDB หรือ MSSQL -
                นำฟอร์มไปใส่ในไว้ใน Body ตามข้อ 1
              </li>
              <li class="list-group-item">
                3. สร้าง View สำหรับการนำรายชื่อผู้สมัครสมาชิกมาแสดงผล -
                โดยนำข้อมูลจากผู้สมัครสมาชิกตามข้อ 2 - นำไปใส่ในไว้ใน Body
                ตามข้อ 1 แยกกับหน้าสมัครสมาชิก
              </li>
              <li class="list-group-item">
                4. เชื่อมต่อ Line Notify สำหรับแจ้งเตือนเมื่อมีการสมัครสมาชิก -
                เมื่อมีสมาชิกสมัครเข้ามาตามข้อ 2 ให้ทำการแจ้งเตือนมายังกลุ่ม
                Line - โดยมีข้อมูล ชื่อผู้ใช้งาน, ชื่อจริง, นามสกุล,
                เบอร์ติดต่อ, อีเมล์
              </li>
              <li class="list-group-item">
                5. อัพโหลด code ขึ้น github และส่ง Link มาที่ esycoder@gmail.com
              </li>
            </p>
          </ul>

          <a href="/register" class="card-link">
            View Register page
          </a>
          <a href="/userList" class="card-link">
            View User List page
          </a>
        </div>
      </div>
    </SimpleLayout>
  );
}
