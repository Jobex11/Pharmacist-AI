"use client";
import { useRouter } from "next/router";

const FullBlog = () => {
  const router = useRouter();
  const { title, image, info, postDate, postTime } = router.query;

  return (
    <div className="container mx-auto py-8">
      <h1 className="font-bold text-2xl">{title}</h1>
      <img src={image} alt={title} className="w-full h-auto mt-4" />
      <p className="mt-4">{info}</p>
      <div className="flex justify-between items-center text-xs mt-2">
        <h6 className="text-gray-500">{postDate}</h6>
        <h6 className="text-gray-500">{postTime}</h6>
      </div>
    </div>
  );
};

export default FullBlog;

/*
import Image from "next/image";
import React from "react";


const BlogContent = () => {
  return (
    <div>
      <div></div>
      <div>
        <h3>Chron’s Disease: Signs and Symptoms, Causes and Treatment</h3>
        <div>
          <div>
            <Image src="" height={100} width={100} />
          </div>
          <div>
            <h6>3RD AUGUST, 2024</h6>
            <h6>6 mins read</h6>
          </div>
        </div>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce feugiat
          metus in odio condimentum placerat. Nam dapibus dolor eget velit
          sodales commodo nec a tellus. Vivamus a consequat nisi. Sed eu
          malesuada urna, in sollicitudin nibh. Vestibulum id elit cursus quam
          pulvinar bibendum. Phasellus accumsan mauris quis magna imperdiet
          rutrum. Etiam nec mauris risus. Integer vitae mi nec massa feugiat
          condimentum. Praesent consectetur consectetur odio in mollis.
          Vestibulum dictum viverra molestie. Morbi nisi turpis, convallis in
          arcu vel, finibus sagittis justo. Cras sed diam sed odio venenatis
          egestas sit amet dictum libero. Ut sed enim pretium, eleifend massa
          non, ultricies dolor. In aliquet magna nec odio lobortis iaculis. Sed
          lacinia gravida tellus, vel venenatis risus lobortis ut. Etiam
          interdum lectus sit amet arcu congue, ac dapibus felis scelerisque.
          Nunc semper lorem leo, sed euismod leo viverra quis. Integer molestie
          quis orci in tempus. In suscipit dapibus odio, sed congue lectus
          euismod non. In tempus pulvinar dui. Aenean semper magna vitae
          vulputate varius. Quisque scelerisque tempor erat, quis ultricies quam
          consectetur sed. Duis eu vehicula urna. Fusce eget mi et sapien rutrum
          consequat. Phasellus purus nibh, egestas molestie urna nec, tincidunt
          tincidunt diam. Proin vel nunc vitae massa aliquam efficitur nec at
          nibh. Mauris diam nisl, dignissim eu diam eget, mattis tincidunt
          tellus. Fusce felis odio, varius pretium nibh condimentum, volutpat
          commodo nisl. Phasellus luctus ante ut risus molestie scelerisque.
          Donec varius ac libero sed lobortis. Phasellus semper non ante
          elementum vulputate. Suspendisse at metus rutrum, tempor justo eget,
          suscipit lacus. Nullam metus massa, hendrerit a tellus id, ultrices
          finibus eros. Praesent id blandit enim. Quisque nec ipsum consectetur,
          fermentum nunc eget, luctus magna. Pellentesque viverra neque vitae mi
          sagittis suscipit. Nunc dictum erat ac massa dignissim, ut eleifend
          orci placerat. Pellentesque id diam sed nunc pharetra fringilla quis
          quis risus. Integer mollis purus dui, eu pretium justo rhoncus non.
          Aliquam sit amet hendrerit metus. Duis id eros quis dui commodo
          interdum. Sed sit amet gravida eros. Nullam molestie accumsan rutrum.
          Aenean sed sapien eget urna varius vehicula. Maecenas euismod pulvinar
          ex, vitae facilisis nisl imperdiet vel. Proin dignissim ipsum a quam
          mollis tristique. Donec quis imperdiet ligula, vitae ultrices magna.
          Nam varius nisl nec pharetra feugiat. Nam vitae blandit nisl. Morbi
          interdum eget ex nec volutpat. In efficitur faucibus turpis.
          Vestibulum porttitor, enim a interdum porta, massa sapien rutrum odio,
          non bibendum tortor mi at mauris. Pellentesque cursus massa ut
          pellentesque fringilla.
        </h4>
      </div>
    </div>
  );
};

export default BlogContent;

*/
