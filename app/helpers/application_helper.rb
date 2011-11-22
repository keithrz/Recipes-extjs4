module ApplicationHelper
  
  def to_paging_object(data, current_page, per_page)
    total = data.length;

    return {"page" => current_page,
            "total" => ((total/per_page).to_i+1),
            "records" => total,
            "rows" => data};
  end
  
end
