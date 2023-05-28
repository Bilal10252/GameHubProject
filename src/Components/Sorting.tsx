import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props{
    selectedSortOrder : (sort: string) => void;
    choosenSort: string | null;
}

const Sorting = ({selectedSortOrder,choosenSort} : Props) => {
    let sortingList = [
        {value: "",
         label: "Relevance"
        },
        {value: "name",
         label: "Name"
        },
        {value: "-released",
         label: "Released"
        },
        {value: "-added",
         label: "Added"
        },
        {value: "created",
         label: "Created"
        },
        {value: "updated",
         label: "Updated"
        },
        {value: "-rating",
         label: "Rating"
        },
        {value: "metacritic",
         label: "MetaCritic"
        }
    ];

    let sortOrder = sortingList.find(sort => sort.value===choosenSort);
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
          Order by: {sortOrder ? sortOrder.label : "Relevance"}
        </MenuButton>
        <MenuList>
          {sortingList.map(sl => <MenuItem onClick={() => selectedSortOrder(sl.value)} key={sl.label} value={sl.value}>{sl.label}</MenuItem>)}
        </MenuList>
      </Menu>
    </>
  );
};

export default Sorting;
