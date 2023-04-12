import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {
  url: string;
  name: string;
  selected?: boolean;
  onClick?: () => void;
};

const ArtworkLink: React.FC<Props> = ({ url, name, onClick, selected }) => {
  return (
    <NavLink
      onClick={onClick}
      to={url}
      className="p-10 pt-0 border-b flex flex-col overflow-hidden"
    >
      <div className="flex items-center justify-start gap-4 font-semibold text-xl z-10 pt-10 bg-[#080808]">
        <span className={`material-symbols-outlined ${selected ? 'rotate-90' : ''} duration-300`}>play_arrow</span>
        <div className="font-semibold text-lg uppercase">{name}</div>
      </div>
      {selected && (
        <motion.div className="description mt-4 pl-10" layoutId="description">
          Thông tin có thể được xem như những đường thẳng song song, chúng diễn
          ra có trình tự, diễn biến cụ thể và độc lập. Khi con người can thiệp
          chúng, thông tin dẫn trở nên nhiễu loạn và bị bóp méo theo ý muốn chủ
          quan của con người. Điều đó khiến cho những câu chữ dường như không
          còn tính nguyên bản, bị cắt ghép nhằm mục đích định hướng dư luận đi
          theo chiều mà họ muốn.
        </motion.div>
      )}
    </NavLink>
  );
};

export default ArtworkLink;
