import React from "react";

function Home() {
  const books = [
    {
      title: "The Monk Who Sold His Ferrari",
      image:
        "https://291d632d64cc0dd8f6ee-e0a47ada9ef95f2c97a4e2339424967d.ssl.cf2.rackcdn.com/s/1/1635865773/harpercollins_us_frontbookcovers_648H/209635.jpg",
      description:
        "Bu kitobda, bir vaqtning erkin va beqiyos obodlikka o'xshash muhim meselelarni boshqarish usullarini o'rganasiz.",
    },
    {
      title: "The Monk Who Sold His Ferrari",
      image:
        "https://291d632d64cc0dd8f6ee-e0a47ada9ef95f2c97a4e2339424967d.ssl.cf2.rackcdn.com/s/1/1635865773/harpercollins_us_frontbookcovers_648H/209635.jpg",
      description:
        "Bu kitobda, bir vaqtning erkin va beqiyos obodlikka o'xshash muhim meselelarni boshqarish usullarini o'rganasiz.",
    },
    {
      title: "The Monk Who Sold His Ferrari",
      image:
        "https://291d632d64cc0dd8f6ee-e0a47ada9ef95f2c97a4e2339424967d.ssl.cf2.rackcdn.com/s/1/1635865773/harpercollins_us_frontbookcovers_648H/209635.jpg",
      description:
        "Bu kitobda, bir vaqtning erkin va beqiyos obodlikka o'xshash muhim meselelarni boshqarish usullarini o'rganasiz.",
    },
    {
      title: "The Monk Who Sold His Ferrari",
      image:
        "https://291d632d64cc0dd8f6ee-e0a47ada9ef95f2c97a4e2339424967d.ssl.cf2.rackcdn.com/s/1/1635865773/harpercollins_us_frontbookcovers_648H/209635.jpg",
      description:
        "Bu kitobda, bir vaqtning erkin va beqiyos obodlikka o'xshash muhim meselelarni boshqarish usullarini o'rganasiz.",
    },
    {
      title: "The Monk Who Sold His Ferrari",
      image:
        "https://291d632d64cc0dd8f6ee-e0a47ada9ef95f2c97a4e2339424967d.ssl.cf2.rackcdn.com/s/1/1635865773/harpercollins_us_frontbookcovers_648H/209635.jpg",
      description:
        "Bu kitobda, bir vaqtning erkin va beqiyos obodlikka o'xshash muhim meselelarni boshqarish usullarini o'rganasiz.",
    },
    {
      title: "The 5 AM Club",
      image:
       
      "https://291d632d64cc0dd8f6ee-e0a47ada9ef95f2c97a4e2339424967d.ssl.cf2.rackcdn.com/s/1/1635865773/harpercollins_us_frontbookcovers_648H/209635.jpg",
      description:
        "Bu kitobda, to'rt kundan uzun davom etuvchi kelajakdagi hayotingizni rivojlantirish uchun tajribalar, o'zini tuzatish va mehnat ishlari tarzi haqida xulosa beriladi.",
    },
    {
      title: "Leadership Wisdom from the Monk Who Sold His Ferrari",
      image: "https://i.harperapps.com/hcanz/covers/9780007549634/y648.jpg",
      description:
        "Bu kitobda, biznes, insoniyat va yaxshi mashg'ulot tajribalaridan olingan ona til bilan ega ajoyib tibbiyotni taqdim etadi.",
    },
    {
      title: "The Leader Who Had No Title",
      image: "https://cdn.gramedia.com/uploads/items/img20220825_13354986.jpg",
      description:
        "Bu kitobda, biznesning eng yuqori darajadagi odamlarining so'nggi butunlikda kimdir va ularning ishlarini qanday bajarganlarini tasvirlashda muammolar oldidan kelayotganlarni aniqlaydi.",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Robin Sharma Kitoblari</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {books.map((book, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <img
              src={book?.image}
              alt={book?.title}
              className="object-cover w-56 mb-4 rounded-lg "
            />
            <h3 className="text-lg font-semibold mb-2">{book?.title}</h3>
            <p className="text-sm">{book?.description}</p>
          </div>
        ))}
      </div>
      <a href="https://www.robinsharma.com/" className="block mt-4 underline">
        Robin Sharma rasmiy sayti
      </a>
    </div>
  );
}

export default Home;
