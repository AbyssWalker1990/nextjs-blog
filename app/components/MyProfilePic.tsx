import Image from 'next/image'

export default function MyProfilePic() {
  return (
    <section className='w-full image-auto'>
			<Image 
				className='border-4 border-black dark:border-slate-500
				drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
				src='/images/user-default.jpg'
				width={200}
				height={200}
				alt='Volodymyr Bordiian'
				priority={true}
			/>
    </section>
  )
}
