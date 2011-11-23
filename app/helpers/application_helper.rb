module ApplicationHelper
  
  def to_paging_object(data, current_page, per_page)
    total = data.length;

    return {"page" => current_page,
            "total" => ((total/per_page).to_i+1),
            "records" => total,
            "rows" => data};
  end
  
  def get_ordered(ar, params)
    @sort_order = get_sort_order(params);
    if @sort_order.nil? then
      return ar.all
    else
      return ar.order(@sort_order);
    end
  end
  
  def get_current_page(params)
    return params[:page].nil? ? 1 : params[:page]
  end
  
  def get_per_page(params)
    return params[:rows].nil? ? 10 : params[:rows]
  end
  
  private
  def get_sort_order(params)
    if params[:sidx].nil? then
      return nil;
    end
    @sort_ascdesc = "ASC"
    if params[:sord].downcase == "desc" then
      @sort_ascdesc = "DESC"
    end
    return params[:sidx] + " " + @sort_ascdesc
  end
end
