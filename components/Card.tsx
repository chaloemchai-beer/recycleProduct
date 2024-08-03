import Link from "next/link"

const posts = [
    {
      id: 1,
      title: 'สิ่งประดิษฐ์จากวัสดุรีไซเคิล',
      href: 'blog/1',
      description:
        'สิ่งประดิษฐ์ต่าง ๆ ที่มาของคำ ที่บอกถึงหลาย ๆ ความหมาย ในที่หนึ่งหมายถึงการนำวัสดุต่าง ๆ มาสร้างสิ่งใหม่ ๆ',
      date: 'Dec 25, 2020',
      datetime: '2020',
      category: { title: 'Products', href: '#' },
      author: {
        name: 'Sell Recycle Products',
        role: 'Group',
        href: '#',
        imageUrl:
          'https://scontent.fbkk22-3.fna.fbcdn.net/v/t39.30808-1/301439850_521237383210425_784689343154362364_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeH5s9DF_JGvYGtk3_k-4sbsgaycFamuA8-BrJwVqa4Dzz0F9-tbhXh0CY9BB__o8E13Z-vY9kWDYb3nLnAFGxpw&_nc_ohc=W8wYrUlSvHkQ7kNvgG3eXzr&_nc_ht=scontent.fbkk22-3.fna&oh=00_AYACKgRIrH7H5cep1zEUCSWI5bw_oEYCjPr3GzN2unDEjw&oe=66B105DD',
      },
    },
    {
        id: 2,
        title: 'สิ่งประดิษฐ์จากวัสดุรีไซเคิล',
        href: '#',
        description:
          'สิ่งประดิษฐ์ต่าง ๆ ที่มาของคำ ที่บอกถึงหลาย ๆ ความหมาย ในที่หนึ่งหมายถึงการนำวัสดุต่าง ๆ มาสร้างสิ่งใหม่ ๆ',
        date: 'Dec 25, 2020',
        datetime: '2020',
        category: { title: 'Products', href: '#' },
        author: {
          name: 'Sell Recycle Products',
          role: 'Group',
          href: '#',
          imageUrl:
            'https://scontent.fbkk22-3.fna.fbcdn.net/v/t39.30808-1/301439850_521237383210425_784689343154362364_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeH5s9DF_JGvYGtk3_k-4sbsgaycFamuA8-BrJwVqa4Dzz0F9-tbhXh0CY9BB__o8E13Z-vY9kWDYb3nLnAFGxpw&_nc_ohc=W8wYrUlSvHkQ7kNvgG3eXzr&_nc_ht=scontent.fbkk22-3.fna&oh=00_AYACKgRIrH7H5cep1zEUCSWI5bw_oEYCjPr3GzN2unDEjw&oe=66B105DD',
        },
      },
      {
        id: 3,
        title: 'สิ่งประดิษฐ์จากวัสดุรีไซเคิล',
        href: '#',
        description:
          'สิ่งประดิษฐ์ต่าง ๆ ที่มาของคำ ที่บอกถึงหลาย ๆ ความหมาย ในที่หนึ่งหมายถึงการนำวัสดุต่าง ๆ มาสร้างสิ่งใหม่ ๆ',
        date: 'Dec 25, 2020',
        datetime: '2020',
        category: { title: 'Products', href: '#' },
        author: {
          name: 'Sell Recycle Products',
          role: 'Group',
          href: '#',
          imageUrl:
            'https://scontent.fbkk22-3.fna.fbcdn.net/v/t39.30808-1/301439850_521237383210425_784689343154362364_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeH5s9DF_JGvYGtk3_k-4sbsgaycFamuA8-BrJwVqa4Dzz0F9-tbhXh0CY9BB__o8E13Z-vY9kWDYb3nLnAFGxpw&_nc_ohc=W8wYrUlSvHkQ7kNvgG3eXzr&_nc_ht=scontent.fbkk22-3.fna&oh=00_AYACKgRIrH7H5cep1zEUCSWI5bw_oEYCjPr3GzN2unDEjw&oe=66B105DD',
        },
      },
  ]
  
  export default function Card() {
    return (
      <div className="bg-white py-24 sm:py-32 sm:m-10" id="blog">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">บทความของพวกเรา </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              บทความให้ความรู้ และคลิปการสอนต่าง ๆ
            </p>
          </div>
          <div className="bg-black p-4 text-white mt-10 sm:w-32 text-center">
            <Link href="blog">เข้าสู่บทความ</Link>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <Link
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </Link>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <Link href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </Link>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  