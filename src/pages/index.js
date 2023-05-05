import Layout from "@/components/Layout/Layout"
import Card from "@/components/cards/Card";
import{ createClient} from "contentful";
import Link from "next/link";
import HeroHome from "./HeroHome";



export default function Home({posts}) {
  console.log(posts);
  return (
    <Layout>
      <div className="container">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-1 pt-10 ">
          {posts.map((post) => (
            <Link href={`post/${post.fields.slug}`} key={post.sys.id}>
              <Card
                img={post.fields.featuredImage.fields.file.url}
                title={post.fields.title}
                excerpt={post.fields.excerpt}
              />
            </Link>
          ))}
        </div>
        {/*Bouttons de bas de page*/}
        <div className="font-light text-center space-x-1 py-10">
        <button className="border border-gray-200 rounded-full text-black text-xl  h-8 w-8">
          &#60;{" "}
        </button>
        <button className="bg-yellow-400 rounded-full text-white text-xl h-8 w-8 ">
          1
        </button>
        <button className="border border-gray-200 rounded-full text-black text-xl h-8 w-8 ">
          2
        </button>
        <button className="border border-gray-200 rounded-full text-black text-xl h-8 w-8 ">
          3
        </button>
        <button className="border border-gray-200 rounded-full text-black text-xl h-8 w-8 ">
          4
        </button>
        <button className="border border-gray-200 rounded-full text-black text-xl h-8 w-8 ">
          5
        </button>
        <button className="border border-gray-200 rounded-full text-black text-xl h-8 w-8 ">
          &#62;
          </button>
         </div>
      </div>
    </Layout>
  );}

  export async function getStaticProps( ) {
//1 connect to contentful
const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

//2 recuperer data en cas de success pour le content_type => escciBlog
//je limite a 9 posts
const data = await client.getEntries({
  content_type:"escciBlog",
  order:"sys.createdAt",
  limit: 9,
});

console.log(data);
//3.on envoie la data ds le props de ma page
return{
  props:{
    posts:data.items,
    }
  }     
}         