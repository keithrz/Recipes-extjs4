module ApplicationHelper
  
  def to_paging_object(data, current_page, per_page, total)
    return {"page" => current_page,
            "total" => ((total/per_page).to_i+1),
            "records" => total,
            "rows" => data};
  end
  
  def get_sorted_page(ar, params, current_page, per_page)
    sort_order = get_sort_order(params)
    offset = (current_page -1) * per_page
    if sort_order.nil? then
      return ar.limit(per_page).offset(offset)
    else
      return ar.order(sort_order).limit(per_page).offset(offset)
    end
  end
  
  def get_current_page(params)
    return params[:page].nil? ? 1 : params[:page].to_i
  end
  
  def get_per_page(params)
    return params[:rows].nil? ? 10 : params[:rows].to_i
  end
  
  private
  def get_sort_order(params)
    if params[:sidx].nil? then
      return nil;
    end
    sort_ascdesc = "ASC"
    if params[:sord].downcase == "desc" then
      sort_ascdesc = "DESC"
    end
    return params[:sidx] + " " + sort_ascdesc
  end
end
